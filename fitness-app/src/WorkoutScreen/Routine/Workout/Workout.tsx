import React, { useState } from "react";
import {
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

export default function Workout() {
  const [name, setName] = useState<string>("Workout");
  const [editToggle, setEditToggle] = useState<boolean>(false);
  const [exercises, setExercises] = useState<Object[]>([
    // { name: "ExerciseName" }
  ]);

  const editButton = (
    // TODO: Edit functionality
    <IconButton
      color="inherit"
      onClick={() => {
        setEditToggle(!editToggle);
        console.log(editToggle);
      }}
    >
      <Edit />
    </IconButton>
  );

  const ExerciseList = () => {
    return (
      <List>
        {exercises.map((exercise) => (
          // TODO: Every exercise needs a key
          <ListItem>
            <Typography component="p">{exercise}</Typography>
            <Checkbox />
            <ListItemSecondaryAction>
              <IconButton>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Paper>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={8}>
          <Typography component="h3">{name}</Typography>
        </Grid>
        <Grid item xs={4}>
          {editButton}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <ExerciseList />
        </Grid>
      </Grid>
    </Paper>
  );
}
