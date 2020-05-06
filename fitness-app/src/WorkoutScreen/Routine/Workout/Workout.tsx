import React, { useState } from "react";
import {
  Card,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddCircle, Close } from "@material-ui/icons";

export default function Workout() {
  const [name, setName] = useState<string>("Workout Name");
  const [editToggle, setEditToggle] = useState<boolean>(false);
  const [exercises, setExercises] = useState([{ name: "Exercise1 Name" }]);

  let workoutName;
  if (editToggle === true) {
    workoutName = (
      <Grid item xs={8}>
        <TextField
          variant="filled"
          onChange={(event) => setName(event.target.value)}
          autoComplete={workoutName}
          placeholder="Workout name "
        />
      </Grid>
    );
  } else {
    workoutName = (
      <Grid item>
        <Typography component="h3">{name}</Typography>
      </Grid>
    );
  }

  const ExerciseList = () => {
    return (
      <List>
        {exercises.map((exercise) => (
          // TODO: Every exercise needs a key
          <ListItem>
            <Typography component="p">{exercise.name}</Typography>
            <Checkbox />
            <ListItemSecondaryAction>
              {/* <IconButton>
                <Delete />
              </IconButton> */}
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  };

  let editCloser;
  if (editToggle) {
    editCloser = (
      <Grid item>
        <IconButton onClick={() => setEditToggle(false)}>
          <Close />
        </IconButton>
      </Grid>
    );
  }

  let addExercise;
  if (editToggle) {
    addExercise = (
      <IconButton color="primary">
        <AddCircle />
      </IconButton>
    );
  }

  return (
    <Card
      onClick={() => {
        if (!editToggle) {
          setEditToggle(true);
        }
      }}
    >
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item>{workoutName}</Grid>
        {editCloser}
      </Grid>
      <Grid container>
        <Grid item>
          <ExerciseList />
        </Grid>
      </Grid>
      {addExercise}
    </Card>
  );
}
