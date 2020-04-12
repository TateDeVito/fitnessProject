import React, { useState } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Fab,
  IconButton,
  List,
  ListItem,
  MenuList,
  MenuItem,
  Paper,
  Typography,
  TextField
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";

export default function Workout() {
  const [name, setName] = useState<string>("Workout Name");
  const [exercises, setExercises] = useState([
    // TODO: External exercise component
    { name: "Bench Press" },
    { name: "Pull Ups" }
  ]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [addMode, setAddMode] = useState<boolean>(false);
  // TODO: location?

  function ExerciseList() {
    let deleteButton = <div />;

    if (editMode) {
      deleteButton = (
        <IconButton size="small">
          <Delete />
        </IconButton>
      );
    }

    return (
      <List>
        {/* Maps exercises to the list */}
        {exercises.map(exercise => (
          <ListItem>
            <Typography component="h1">{exercise.name}</Typography>
            <Checkbox />
            {/* TODO: If this gets clicked, the state containing exercises must be 
            adjusted so that this exercise is not in it */}
            {deleteButton}
          </ListItem>
        ))}
      </List>
    );
  }

  const EditToggle = () => {
    setEditMode(!editMode);
    return;
  };

  const AddToggle = () => {
    setAddMode(!addMode);
    return;
  };

  function AddExercise() {
    // TODO: Build a select once this is clicked that allows a user to pick from two options
    // TODO: Option 1: Create new: a small floating text field to add an exercise
    // TODO: Option 2: Must be able to look through saved workouts and pick from exercises there

    let addMenu = <Paper />;

    if (addMode) {
      addMenu = (
        <Paper>
          <MenuList color="primary">
            <MenuItem>Create new workout</MenuItem>
            <MenuItem>Add from saved</MenuItem>
          </MenuList>
        </Paper>
      );
    }

    return <div>{addMenu}</div>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <IconButton size="small" onClick={EditToggle}>
            <Edit />
          </IconButton>
          <Typography component="p">
            <b>{name}</b>
          </Typography>
          {/* TODO: Make name, and exercise list editable */}
          <ExerciseList />
          <Fab size="small" color="primary" onClick={AddToggle}>
            <AddIcon />
          </Fab>
        </CardContent>
      </Card>
      <AddExercise />
    </div>
  );
}
