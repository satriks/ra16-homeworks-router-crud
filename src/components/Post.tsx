import postTime from "./utils/postTime";
import avatar from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

interface Props {
  post: { id: number; content: string; created: number };
}

export default function Post({ post }: Props) {
  console.log(post);

  return (
    <div className="post">
      <NavLink
        to={`/posts/${post.id}`}
        id={post.id.toString()}
        style={{ color: "black" }}
      >
        <div className="post__header">
          <img className="post__avatar" src={avatar} alt="" />
          <div>
            <span className="post__name">Иван Иванов</span>
            <span>Администратор группы {postTime(post && post.created)}</span>
          </div>
        </div>
        <span className="post__text">{post.content}</span>
      </NavLink>
      <div className="post__react">
        <button>
          <span style={{ fontSize: "22px" }}>🖒</span> Нравится
        </button>
        <button>
          <span style={{ fontSize: "22px" }}>🖹</span>Комментировать
        </button>
      </div>
      <div className="post__footer">
        <img className="post__avatar post__avatar-mini" src={avatar} alt="" />
        <input type="text" placeholder="Напишите комментарий" />
      </div>
    </div>
  );
}
