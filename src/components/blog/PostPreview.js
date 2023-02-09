import { Link } from "react-router-dom";
import toFullDate from "../../util/DateUtil";

const Post = ({ post, border }) => {
  return (
    <div className={`post ${!border && "post--no-border"}`}>
      <Link to={`/post/${post.title}`} className="post__title">
        {post.title}
      </Link>
      <p className="post__publish-date">{toFullDate(post.publishDate)}</p>
      <p className="post__description">{post.body}</p>
      {/* <div className="post__tags-container">
        {post.tags.length > 0 &&
          post.tags.map((tag) => <div className="post__tag">{tag}</div>)}
      </div> */}
    </div>
  );
};

export default Post;
