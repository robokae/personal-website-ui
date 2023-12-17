const Computer = () => {
  return (
    <div className="computer">
      <ComputerScreen />
      <ComputerStand />
    </div>
  );
};

const ComputerScreen = () => {
  return (
    <div className="computer-screen">
      <CodeEditor />
      <WebBrowser />
    </div>
  );
};

const CodeEditor = () => {
  const numLinesOfCodeTop = 10;
  const numLinesOfCodeBottom = 3;

  const getLinesOfCode = (numLines, className) => {
    return [...Array(numLines).keys()].map((num) => (
      <div key={num} className={`${className}--${num + 1}`}></div>
    ));
  };

  return (
    <div className="code-editor">
      <div className="code-editor__top">
        {getLinesOfCode(
          numLinesOfCodeTop,
          "code-editor__top__line-of-code code-editor__top__line-of-code"
        )}
      </div>
      <div className="code-editor__bottom">
        {getLinesOfCode(
          numLinesOfCodeBottom,
          "code-editor__bottom__line-of-code code-editor__bottom__line-of-code"
        )}
      </div>
    </div>
  );
};

const FeaturedTile = () => {
  return (
    <div className="featured-tile">
      <div className="featured-tile__image-placeholder"></div>
      <div className="featured-tile__text-placeholder">
        <div className="featured-tile__text-placeholder__text"></div>
        <div className="featured-tile__text-placeholder__text"></div>
        <div className="featured-tile__text-placeholder__text"></div>
      </div>
    </div>
  );
};

const WebBrowser = () => {
  return (
    <div className="web-browser">
      <div className="web-browser__status-bar"></div>
      <div className="web-browser__webpage">
        <div className="web-browser__webpage__hero">
          <div className="web-browser__webpage__hero__left">
            <div className="web-browser__webpage__hero__left__text-placeholder">
              <div className="web-browser__webpage__hero__left__text-placeholder__heading"></div>
              <div className="web-browser__webpage__hero__left__text-placeholder__description">
                <div className="web-browser__webpage__hero__left__text-placeholder__description__text"></div>
                <div className="web-browser__webpage__hero__left__text-placeholder__description__text"></div>
                <div className="web-browser__webpage__hero__left__text-placeholder__description__text"></div>
              </div>
            </div>
          </div>
          <div className="web-browser__webpage__hero__right"></div>
        </div>
        <div className="web-browser__webpage__grid">
          <FeaturedTile />
          <FeaturedTile />
          <FeaturedTile />
        </div>
      </div>
    </div>
  );
};

const ComputerStand = () => {
  return (
    <div className="computer-stand">
      <div className="computer-stand__top"></div>
      <div className="computer-stand__bottom"></div>
    </div>
  );
};

const ComputerIllustration = () => {
  return (
    <div className="computer-illustration">
      <div className="computer-illustration__top">
        <Computer />
      </div>
      <div className="computer-illustration__bottom"></div>
    </div>
  );
};

export default ComputerIllustration;
