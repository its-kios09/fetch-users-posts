import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";
import useUsersPosts from "../hook/fetch.resorce";

const UserList: React.FC = () => {
  const { users, getPostCountForUser, loading, error } = useUsersPosts();

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText
            primary={user.name}
            secondary={`${getPostCountForUser(user.id)} posts`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
