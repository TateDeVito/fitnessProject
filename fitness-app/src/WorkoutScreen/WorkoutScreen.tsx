import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import Workout from "./Workout/Workout";

export default function WorkoutScreen() {
  // A profile bar has a name of user, and an avatar in the top corner
  function ProfileBar(props: { name: string }) {
    return (
      <div>
        <AppBar color="inherit">
          <Toolbar>
            <Button color="secondary">Login</Button>
            <Typography color="secondary" variant="h6">
              <b>Welcome {props.name} !</b>
            </Typography>
            {/* <Avatar>{props.name[0]}</Avatar> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return (
    <div>
      <ProfileBar name="Tate" />
      <Workout></Workout>
    </div>
  );
}
