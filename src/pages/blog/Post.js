import { useParams } from "react-router-dom";
import posts from "../../data/posts";
import "./Post.scss";

const MAX_CHAR_FOR_DISPLAY_CENTER = 500;

const Post = () => {
  const { postTitle } = useParams();
  const post = posts.find((p) => p.title === postTitle);
  return (
    <div className="post-page">
      <div className="post-page__content">
        <h3 className="post-page__post-title">{post.title}</h3>
        <p className="post-page__post-publish-date">{post.publishDate}</p>
        <p
          className={`post-page__post-body post-page__post-body--${
            post.body.length >= MAX_CHAR_FOR_DISPLAY_CENTER && "center"
          }`}
        >
          {post.body}
        </p>
      </div>
    </div>
  );
};

export default Post;
