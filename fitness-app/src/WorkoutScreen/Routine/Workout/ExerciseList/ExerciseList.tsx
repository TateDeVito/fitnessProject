import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";

export default function ExerciseList(props: any) {
  const [exerciseName, setExerciseName] = useState<string>();
  const [completed, setCompleted] = useState(false);

  return (
    <List>
      {props.exercises.map((exercise: string) => (
        // TODO: Every exercise needs a key
        <ListItem>
          <Typography component="p">{exercise}</Typography>
          <ListItemSecondaryAction>
            {/* <IconButton>
                <Delete />
              </IconButton> */}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

// TODO: Break this out
// function Exercise() {
// }
