import React, { useState } from "react";
import { Grid, Fab, Typography } from "@material-ui/core";
import Workout from "./Workout/Workout";
import AddIcon from "@material-ui/icons/Add";

export default function Routine() {
  //TODO: Should have a current workout - the current should be greatly highlighted,
  // and you can scroll through the others
  //TODO: Should have a progress bar to show how far along the length it is

  const [routineName, setRoutineName] = useState<string>("Untitled");
  const [workoutQueue, setWorkoutQueue] = useState<Object[]>([]);

  let RoutineLabel;
  if (workoutQueue.length < 1) {
    RoutineLabel = (
      <Grid item>
        <Typography component="h2">
          You can create your first workout with the button below!
        </Typography>
      </Grid>
    );
  } else {
    RoutineLabel = (
      <Grid item>
        {/* TODO: onClick here should allow you to cycle through different routines
        that a user has to potentially switch */}
        <Typography component="h1" onClick={() => console.log(routineName)}>
          {routineName} - {workoutQueue.length} workout(s)
        </Typography>
      </Grid>
    );
  }

  // TODO: workouts need unique keys
  const WorkoutRow = (
    <Grid
      container
      spacing={1}
      wrap="nowrap"
      alignContent="center"
      style={{ overflow: "auto" }}
    >
      {workoutQueue.map((workout) => (
        <Grid item>
          <Workout />
        </Grid>
      ))}
    </Grid>
  );

  function AddButton() {
    const addBtn = (
      <Grid item spacing={1}>
        <Fab
          size="medium"
          color="secondary"
          onClick={() => {
            setWorkoutQueue([...workoutQueue, {}]);
          }}
        >
          <AddIcon />
        </Fab>
      </Grid>
    );

    return addBtn;
  }

  return (
    <Grid container spacing={3} justify="center">
      {RoutineLabel}
      {WorkoutRow}
      {AddButton()}
    </Grid>
  );
}
