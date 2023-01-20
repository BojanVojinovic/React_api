import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostInfo = styled.div`
  font-size: 18px;
  color: #dedede;
  line-height: 22px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const PostInfoWraper = styled.div`
  padding: 24px;
`;

export const Button = styled.div`
  padding: 5px;
  border: 2px solid #eb3b22;
  width: 60px;
  border-radius: 5px;
  text-align: center;
  background-color: #eb3b22;
  position: absolute;
  top: 20px;
  right: 40px;
  a {
    color: #dedede;
    font-weight: 500;
  }
`;
