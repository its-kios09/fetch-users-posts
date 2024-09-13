import { useEffect, useState } from "react";
import { Post, User } from "../types";

const useUsersPosts = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData: User[] = await usersResponse.json();
        setUsers(usersData);

        const postsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData: Post[] = await postsResponse.json();
        setPosts(postsData);

        setLoading(false);
      } catch (err) {
        setError("Failed to load data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getPostCountForUser = (userId: number): number => {
    return posts.filter((post) => post.userId === userId).length;
  };

  return { users, getPostCountForUser, loading, error };
};

export default useUsersPosts;
