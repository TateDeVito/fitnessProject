import React, { useState } from "react";
import { Grid, Fab } from "@material-ui/core";
import Workout from "./Workout/Workout";
import AddIcon from "@material-ui/icons/Add";

export default function Routine() {
  //TODO: Has "workout pages" built from a queue of workouts
  //TODO: Should have a current workout - the current should be greatly highlighted,
  // and you can scroll through the others
  //TODO: Should have a progress bar to show how far along the length it is

  // TODO: This has to be an array of Workouts specifically
  const [workoutQueue, setWorkoutQueue] = useState<Object[]>([{}]);

  const workoutRow = (
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

  const addButton = (
    <Grid item spacing={1}>
      <Fab size="medium" color="secondary">
        <AddIcon
          // TODO: expand onClick functionality; possibly add general add workout function
          onClick={() => {
            setWorkoutQueue([...workoutQueue, {}]);
          }}
        />
      </Fab>
    </Grid>
  );

  return (
    <Grid container spacing={2}>
      {workoutRow}
      {addButton}
    </Grid>
  );
}
