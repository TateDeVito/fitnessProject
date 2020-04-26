import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import Routine from "./Routine/Routine";

export default function WorkoutScreen() {
  // A profile bar has a name of user, and an avatar in the top corner
  function NavBar(props: { name: string }) {
    return (
      <div>
        <AppBar color="inherit">
          <Toolbar>
            <Button color="secondary">Login</Button>
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
            <b>{props.name}</b>
            <Typography component="p">
              Favorite Sports: Surfing, Soccer
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Container fixed>
      <ProfileCard name="Tate" />
      <br />
      <Routine />
    </Container>
  );
}
