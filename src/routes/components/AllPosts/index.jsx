import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListItem, UnorderedList, Button, Span } from "../ui/List/styled";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
          <UnorderedList>
            <ListItem>
              {" "}
              <Span>User Id:</Span> {post.userId}
            </ListItem>
            <ListItem>
              {" "}
              <Span>ID:</Span> {post.id}
            </ListItem>
            <ListItem>
              {" "}
              <Span>Title:</Span> {post.title}
            </ListItem>
            <ListItem>
              {" "}
              <Span>Body:</Span> {post.body}
            </ListItem>

            <Button action="posts">
              <Link to={`/posts/${post.id}`}>View comments</Link>
            </Button>
          </UnorderedList>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
