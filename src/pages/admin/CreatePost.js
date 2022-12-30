import axios from "axios";
import { useState } from "react";
import TextEditor from "../../components/TextEditor";

const CreatePost = () => {
  const AUTHOR = "Alexander Hom";
  const [title, setTitle] = useState("");

  const submitPost = (postBody) => {
    let postTitle = title;
    let publishDate = new Date();

    let post = {
      title: postTitle,
      publishDate: publishDate,
      author: AUTHOR,
      body: postBody,
    };

    axios.post("/api/posts/create", post).then((res) => {
      console.log(res);
    });
  };

  const savePost = () => {
    console.log("Save post");
    // TODO: Implement save post logic
  };

  const discardPost = () => {
    console.log("Discard post");
    // TODO: Implement discard post logic
  };

  return (
    <div className="create-post-page">
      <div className="create-post-page__content">
        <h2 className="create-post-page__heading">Create Post</h2>
        <div className="create-post-page__input-container">
          <input
            className="create-post-page__title-input"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextEditor
            submitHandler={submitPost}
            saveHandler={savePost}
            discardHandler={discardPost}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
