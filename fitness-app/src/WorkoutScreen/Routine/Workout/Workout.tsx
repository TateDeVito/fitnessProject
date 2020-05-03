import React, { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export default function Workout() {
  const [name, setName] = useState<string>("Workout Name");
  const [exercises, setExercises] = useState([
    // TODO: External exercise component
    { name: "Bench Press" },
    { name: "Pull Ups" },
  ]);

  // This should be broken out to another component, and then exercises should
  function ExerciseList() {
    return (
      <List>
        {/* Maps exercises to the list */}
        {exercises.map((exercise) => (
          // TODO: Every exercise needs a key
          <ListItem divider={true}>
            <Typography component="p">{exercise.name}</Typography>
            <Checkbox />
            <ListItemSecondaryAction>
              <IconButton>
                {/* TODO: If this gets clicked, the state containing exercises must be 
            adjusted so that this exercise is not in it */}
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }

  // TODO: This should add an exercise to the end of the workout
  function AddExercise(exercise: string) {
    return;
  }

  return (
    <div>
      <Paper>
        <Typography component="h2">{name}</Typography>
        {/* TODO: Make name, and exercise list editable */}
        <ExerciseList />
      </Paper>
    </div>
  );
}
