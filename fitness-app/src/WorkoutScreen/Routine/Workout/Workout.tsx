import React, { useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  IconButton,
  List,
  ListItem,
  Typography,
  TextField
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

export default function Workout() {
  // TODO: Make name, and exercise list editable
  const [name, setName] = useState<string>("Workout Name");

  // A List of exercises --> what is in an exercise? (editable)
  const [exercises, setExercises] = useState([
    // TODO: External component
    { name: "Bench Press" },
    { name: "Pull Ups" }
  ]);

  // A location?

  // A notes section
  const [notes, setNotes] = useState<string>("");

  // TODO: A section for comments?

  function ExerciseList() {
    return (
      <List>
        {/* Maps exercises to the list */}
        {exercises.map(exercise => (
          <ListItem>
            <Typography component="h1">{exercise.name}</Typography>
            <Checkbox></Checkbox>
          </ListItem>
        ))}
      </List>
    );
  }

  return (
    <div>
      <Card>
        <CardContent>
          {/* TODO: Name */}
          {/* <IconButton edge="end" size="small">
            <Edit></Edit>
          </IconButton> */}
          <Typography component="p">
            <b>{name}</b>
          </Typography>
          {/* TODO: Make name, and exercise list editable */}
          {/* List of exercises */}
          <ExerciseList />
          {/* Notes */}
          <TextField
            multiline
            label="Notes"
            rowsMax="4"
            defaultValue={notes}
            variant="outlined"
            onChange={event => {
              setNotes(event.target.value);
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
