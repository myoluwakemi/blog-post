import { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);

  };

  useEffect(() => {
    fetchPost();
  }, []);
  



  const renderPost = Object.values(posts).map(post => {
    return<div key={post.id}>
        <h3>{post.title}</h3>

    </div>
  });

  return <div>{renderPost}</div>;
};
export default PostList;
