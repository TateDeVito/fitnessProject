import React, { useState } from "react";
import {
  Card,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { AddCircle, Close } from "@material-ui/icons";
import ExerciseList from "./ExerciseList/ExerciseList";

export default function Workout() {
  const [expandToggle, setExpandToggle] = useState<boolean>(false);
  const [name, setName] = useState<string>("Workout Name");
  const [exercises, setExercises] = useState<string[]>([]);

  let workoutName;
  if (expandToggle === true) {
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

  let editCloser;
  if (expandToggle) {
    editCloser = (
      <Grid item>
        <IconButton onClick={() => setExpandToggle(false)}>
          <Close />
        </IconButton>
      </Grid>
    );
  }

  let addExercise;
  if (expandToggle) {
    addExercise = (
      <IconButton
        color="primary"
        onClick={() => setExercises([...exercises, "New exercise"])}
      >
        <AddCircle />
      </IconButton>
    );
  }

  return (
    <Card
      onClick={() => {
        if (!expandToggle) {
          setExpandToggle(true);
        }
      }}
    >
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item>{workoutName}</Grid>
        {editCloser}
      </Grid>
      <Grid container>
        <Grid item>
          <ExerciseList exercises={exercises} />
          {addExercise}
        </Grid>
      </Grid>
    </Card>
  );
}
