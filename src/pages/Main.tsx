import { useEffect, useState } from "react";
import PostService from "../components/utils/PostService";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [posts, setPosts] = useState<
    { id: number; content: string; created: number }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      const res = await PostService.getAll();
      setPosts(res);
    };

    void getPosts();
  }, []);

  const createPost = () => {
    navigate("/posts/new");
  };

  posts.sort((a, b) => b.id - a.id);
  return (
    <div className="container">
      <header>
        <button onClick={createPost}>Создать пост</button>
      </header>
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
}
