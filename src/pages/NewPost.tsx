import { useRef } from "react";
import { useNavigate } from "react-router";
import PostService from "../components/utils/PostService";

export default function NewPost() {
  const navigate = useNavigate();
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const close = () => {
    navigate("/");
  };

  const add = () => {
    const text = ref.current?.value;

    text && PostService.createPost(text);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="create__header">
        <div className="create__category">
          <span>🖉 Публикация</span>
          <span>📷 Фото/Видео</span>
          <span>📹 Прямой эфир</span>
          <span>… Еще</span>
        </div>
        <button onClick={close}>X</button>
      </div>
      <textarea name="textInput" id="textInput" ref={ref}></textarea>
      <div className="create__footer">
        <button className="create__btn" onClick={add}>
          Опубликовать
        </button>
      </div>
    </div>
  );
}
