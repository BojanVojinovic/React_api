import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostInfo, PostInfoWraper, Button } from "./style";
import {
  ListItem,
  UnorderedList,
  OrderedList,
  Span,
  Heading,
} from "../ui/List/styled";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((result) => {
        setComments(result);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((result) => {
        setPost(result);
      });
  }, []);

  return (
    <div>
      <Heading>Post with id {post.id}</Heading>
      <Button action="../">
        <Link to={`../`}>Return</Link>
      </Button>
      <PostInfoWraper>
        <PostInfo>
          <Span>User Id:</Span> {post.userId}
        </PostInfo>
        <PostInfo>
          <Span>Title:</Span> {post.title}
        </PostInfo>
        <PostInfo>
          <Span>Body:</Span> {post.body}
        </PostInfo>
      </PostInfoWraper>

      <Heading>Comments</Heading>

      <OrderedList>
        {comments.map((comment) => (
          <ListItem>
            <UnorderedList>
              <ListItem>
                <Span> postId:</Span> {comment.postId}
              </ListItem>
              <ListItem>
                <Span> ID:</Span> {comment.id}
              </ListItem>
              <ListItem>
                <Span> name:</Span> {comment.name}
              </ListItem>
              <ListItem>
                <Span>email:</Span> {comment.email}
              </ListItem>
              <ListItem>
                <Span> Body:</Span> {comment.body}
              </ListItem>
            </UnorderedList>
          </ListItem>
        ))}
      </OrderedList>
    </div>
  );
};

export default Post;
