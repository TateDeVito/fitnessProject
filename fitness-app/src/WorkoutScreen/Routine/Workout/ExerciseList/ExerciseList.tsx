import React, { useState } from "react";
import { IconButton, List, ListItem, Typography } from "@material-ui/core";
import { AddCircle, RemoveCircle } from "@material-ui/icons";

export default function ExerciseList(props: any) {
  const [exercises, setExercises] = useState<string[]>([]);

  let addExercise;
  if (props.editToggle) {
    addExercise = (
      <IconButton
        color="primary"
        onClick={() => setExercises([...exercises, "exerciseName"])}
      >
        <AddCircle />
      </IconButton>
    );
  }

  const exerciseList = (
    <List>
      {exercises.map((exercise: string) => (
        // TODO: Every exercise needs a key
        <ListItem button={true}>
          <Typography component="p">{exercise}</Typography>
          <IconButton
            color="secondary"
            onClick={() => {
              // TODO: This only works once editToggle closes again
              exercises.splice(exercises.indexOf(exercise), 1);
              setExercises(exercises);
            }}
          >
            <RemoveCircle />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      {exerciseList}
      {addExercise}
    </>
  );
}

// TODO: Break this out
// const [completed, setCompleted] = useState<boolean>(false);
// const [exerciseName, setExerciseName] = useState<boolean>(false);
// function Exercise() {
// }
