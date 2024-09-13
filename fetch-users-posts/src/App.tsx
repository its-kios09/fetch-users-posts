import React from "react";
import { Container, Typography, Box } from "@mui/material";
import UserList from "./component/UserList.component";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Users and Post Counts
        </Typography>
      </Box>
      <UserList />
    </Container>
  );
};

export default App;
