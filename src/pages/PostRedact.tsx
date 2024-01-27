import avatar from "../assets/avatar.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PostService from "../components/utils/PostService";

export default function PostRedact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const [post, setPost] = useState<{
    id: string;
    created: string;
    content: string;
  }>();

  const close = () => {
    navigate(`/posts/${id}`);
  };

  const updatePost = () => {
    const text = ref.current?.value;
    post && text && PostService.updatePost(post.id, text);
    navigate(`/posts/${id}`);
  };

  useEffect(() => {
    const getPostData = async (id: string) => {
      const res = await PostService.getPost(id);
      console.log(res);
      setPost(res.post);
    };

    id && void getPostData(id);
  }, [id]);

  if (post) {
    return (
      <div className="container">
        <div className="create__header">
          <div className="update__category">Редактировать публикацию</div>
          <button onClick={close}>X</button>
        </div>
        <div className="update__post">
          <img className="post__avatar" src={avatar} alt="" />
          <textarea name="textInput" id="textInput" ref={ref}>
            {post.content}
          </textarea>
        </div>
        <div className="update__actions">
          <div>🏞 Фото / видео</div>
          <div>👤 Отметить друзей</div>
          <div>😀 Чувства / действия</div>
          <div>𑇍 Отметить посещение</div>
          <div>🖺 GIF</div>
        </div>
        <div className="create__footer">
          <button className="create__btn" onClick={updatePost}>
            Опубликовать
          </button>
        </div>
      </div>
    );
  }
}
