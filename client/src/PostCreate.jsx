import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import React from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    border: none;
    background: none;
    padding: 1rem 0;
    width: 100%;
    color: #fff;
    ::placeholder {
      font-size: 16px;
    }
    :focus {
      outline: none;
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: right;
    button {
      padding: 1rem;
      border-radius: 16px;
      border: none;
    }
  }
`;
const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("")
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="whats happenning..."
          />
        </div>
        <div className="button-wrapper">
          <button type="submit">submit</button>
        </div>
      </Form>
    </div>
  );
};
export default PostCreate;
