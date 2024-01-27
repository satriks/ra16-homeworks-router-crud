import axios from "axios";

const connect = axios.create({
  baseURL: import.meta.env.VITE_URL || "http://localhost:7070",
});

export default class PostService {
  static getAll = async () => {
    const res = await connect.get("/posts");
    console.log(res);
    return res.data;
  };
  static getPost = async (id: number | string) => {
    const res = await connect.get(`/posts/${id}`);
    console.log(res);
    return res.data;
  };
  static delPost = async (id: number | string) => {
    connect.delete(`/posts/${id}`);
  };
  static createPost = async (text: string) => {
    connect.post("/posts", { id: 0, content: text });
  };
  static updatePost = async (id: string, text: string) => {
    connect.put(`/posts/${id}`, { id: id, content: text });
  };
}
