import React, { useState } from "react";
import Workout from "./Workout/Workout";

export default function Routine() {
  // A list of workouts that the user has scheduled
  // TODO: If empty, should be able to prompt a user to build a new workout
  // TODO: Should have a '+' so as to allow a user to add a workout
  return (
    <div>
      <Workout></Workout>
    </div>
  );
}
