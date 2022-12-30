import { Link } from "react-router-dom";
import JSONDateConverter from "../../util/JSONDateConverter";

const Post = ({ post, border }) => {
  return (
    <div className={`post ${!border && "post--no-border"}`}>
      <Link to={`/post/${post.title}`} className="post__title">
        {post.title}
      </Link>
      <p className="post__publish-date">
        {new JSONDateConverter(post.publishDate).toFullDate()}
      </p>
      <p className="post__description">{post.body}</p>
      {/* <div className="post__tags-container">
        {post.tags.length > 0 &&
          post.tags.map((tag) => <div className="post__tag">{tag}</div>)}
      </div> */}
    </div>
  );
};

export default Post;
