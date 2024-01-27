import postTime from "../components/utils/postTime";
import avatar from "../assets/avatar.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostService from "../components/utils/PostService";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<{
    id: string;
    created: number;
    content: string;
  }>();

  useEffect(() => {
    const getPostData = async (id: string) => {
      const res = await PostService.getPost(id);
      console.log(res);
      setPost(res.post);
    };

    id && void getPostData(id);
  }, [id]);

  const del = () => {
    id && PostService.delPost(id);
    navigate("/");
  };

  if (post) {
    return (
      <div className="post" id={post.id}>
        <div className="post__header post__header-detail  ">
          <img className="post__avatar" src={avatar} alt="" />
          <div style={{ flexGrow: "1" }}>
            <span className="post__name">Иван Иванов</span>
            <span>Администратор группы {postTime(post && post.created)}</span>
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            X
          </button>
        </div>
        <span className="post__text">{post.content}</span>
        <div className="post__react">
          <button>
            <span style={{ fontSize: "22px" }}>🖒</span> Нравится
          </button>
          <button>
            <span style={{ fontSize: "22px" }}>🖹</span>Комментировать
          </button>
        </div>
        <div className="detail__footer">
          <button
            className="detail__change"
            onClick={() => navigate(`/posts/${id}/redact`)}
          >
            Изменить
          </button>
          <button className="detail__del" onClick={del}>
            Удалить
          </button>
        </div>
      </div>
    );
  }
}
