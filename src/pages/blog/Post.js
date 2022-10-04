import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JSONDateConverter from "../../util/JSONDateConverter";
import "./Post.scss";

const MAX_CHAR_FOR_DISPLAY_CENTER = 500;

const Post = () => {
  const { postTitle } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async (postTitle) => {
      const res = await axios.get(`/api/posts/${postTitle}`);
      setPost(res.data);
    };
    fetchPost(postTitle);
  }, [postTitle]);

  return (
    <div className="post-page">
      <div className="post-page__content">
        {post && (
          <>
            <h3 className="post-page__post-title">{post.title}</h3>
            <p className="post-page__post-publish-date">
              {new JSONDateConverter(post.publishDate).toFullDate()}
            </p>
            <p
              className={`post-page__post-body post-page__post-body--${
                post.body.length >= MAX_CHAR_FOR_DISPLAY_CENTER && "center"
              }`}
            >
              {post.body}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
