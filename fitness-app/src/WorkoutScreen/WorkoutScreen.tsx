import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia
} from "@material-ui/core";

export default function WorkoutScreen() {
  // A profile bar has a name of user, and an avatar in the top corner
  function NavBar(props: { name: string }) {
    return (
      <div>
        <AppBar color="inherit">
          <Toolbar>
            <Button color="secondary">Login</Button>
            <Typography color="secondary" variant="h6">
              <b>Welcome!</b>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  function ProfileCard(props: { name: string }) {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography component="h2">
              <b>{props.name}</b>
            </Typography>
            <Typography component="p">
              Favorite Sports: Surfing, Soccer
            </Typography>
          </CardContent>
          {/* TODO: Avatar? */}
          <CardMedia component="img" />
        </Card>
      </div>
    );
  }

  return (
    <div>
      <NavBar name="Tate" />
      <ProfileCard name="Tate" />
    </div>
  );
}
