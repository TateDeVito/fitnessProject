import React, { useState } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography
} from "@material-ui/core";

export default function Workout() {
  // TODO: A workout is made up of
  // A name (editable)
  const [name, setName] = useState<string>("Workout Name");

  // A List of exercises --> what is in an exercise? (editable)
  const [exercises, setExercises] = useState(["Bench Press", "Pull Ups"]);

  // A location?

  // A notes section
  const [notes, setNotes] = useState<string>("Notes...");

  // TODO: A section for comments?

  function ExerciseList() {
    return (
      <List>
        {/* Maps exercises to the list */}
        {exercises.map(exercise => (
          <ListItem>
            <Typography component="h1">{exercise}</Typography>
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
          <Typography component="h2">
            <b>{name}</b>
          </Typography>
          {/* TODO: List of exercises */}
          <ExerciseList />
          {/* Notes */}
          __________________________________
          <Typography component="p">{notes}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
