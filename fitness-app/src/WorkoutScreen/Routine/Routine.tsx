import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Workout from "./Workout/Workout";

export default function Routine() {
  //TODO: Has "workout pages" built from a queue of workouts
  //TODO: Should have a progress bar to show how far along the length it is

  // TODO: This has to be an array of Workouts specifically
  const [workoutQueue, setWorkoutQueue] = useState<Object[]>([{}, {}, {}]);

  const workoutSlider = () => {
    let workoutRow;
    if (workoutQueue.length > 0) {
      workoutRow = (
        <>
          {workoutQueue.map((workout) => (
            <Grid item>
              {/* TODO: Should be automatic */}
              <Workout />
            </Grid>
          ))}
        </>
      );
    }

    return (
      <Grid
        container
        spacing={1}
        wrap="nowrap"
        alignContent="center"
        style={{ overflow: "auto" }}
      >
        {workoutRow}
      </Grid>
    );
  };

  return <>{workoutSlider()}</>;
}
