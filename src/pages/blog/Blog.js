import Post from "../../components/blog/PostPreview";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts/all");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-page__content">
        <div className="blog-page__side-menu-container">
          <div className="blog-page__welcome-container">
            <h3 className="blog-page__welcome-heading">Welcome!</h3>
            <p className="blog-page__welcome-message">
              Thanks for checking out my blog. I like to write about software
              development and all-things programming and technology related.
            </p>
          </div>
          {/* <div className="blog-page__topics-container">
          <h3 className="blog-page__topics-heading">Topics</h3>
        </div> */}
          {/* <div className="blog-page__email-updates-container">
            <h3 className="blog-page__email-updates-heading">
              Send Me Updates
            </h3>
            <p className="blog-page__email-updates-message">
              Be the first to hear whenever I post a new blog article.
            </p>
            <div className="blog-page__email-updates-input-container">
              <input
                type="email"
                placeholder="Email"
                className="blog-page__email-updates-email-input"
              ></input>
              <FontAwesomeIcon
                className="blog-page__icon"
                icon={faArrowRight}
              />
            </div>
          </div> */}
          <div className="blog-page__about-me-container">
            <h3 className="blog-page__about-me-heading">About Me</h3>
            <p className="blog-page__about-me">
              I am a software developer from San Francisco who is passionate
              about UI/UX and full-stack development.
            </p>
          </div>
          <div className="blog-page__contact-links-container">
            <h3>Follow Me</h3>
            <div className="blog-page__contact-links">
              <div className="blog-page__contact-link">
                <FontAwesomeIcon
                  className="blog-page__icon blog-page__icon--contact"
                  icon={faGithub}
                />
                <a href="https://github.com/robokae">GitHub</a>
              </div>
              <div className="blog-page__contact-link">
                <FontAwesomeIcon
                  className="blog-page__icon blog-page__icon--contact"
                  icon={faLinkedin}
                />
                <a href="https://www.linkedin.com/in/alexander-hom-94811b188/">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-page__blog-feed-container">
          {/* <div className="blog-page__blog-feed-display-options">
            <div className="blog-page__search-bar">
              <input
                type="text"
                placeholder="Search"
                className="blog-page__search-bar-input"
              ></input>
              <FontAwesomeIcon className="blog-page__icon" icon={faSearch} />
            </div>
            <div className="blog-page__sort-by-options-container">
              <p>Showing:</p>
              <button>Most Recent</button>
              <button>A - Z</button>
            </div>
          </div> */}
          <div className="blog-page__blog-feed">
            {posts &&
              posts.map((post, index) => (
                <Post
                  key={post.id}
                  post={post}
                  border={index === posts.length - 1 ? false : true}
                />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
