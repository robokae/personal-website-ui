import { Link } from "react-router-dom";
import JSONDateConverter from "../../util/JSONDateConverter";
import "./Post.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <Link to={`/post/${post.title}`} className="post__title">
        {post.title}
      </Link>
      <p className="post__publish-date">
        {JSONDateConverter(post.publishDate)}
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
