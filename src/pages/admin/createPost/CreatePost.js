import TextEditor from "../../../components/admin/TextEditor";
import "./CreatePost.scss";

const CreatePost = () => {
  const submitPost = () => {
    console.log("Submit post");
    // TODO: Implement submit post logic
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
