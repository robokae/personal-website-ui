import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import styles from "./Carousel.module.scss";

const ActionButton = styled.button`
  color: ${({ theme }) => theme.secondaryFontCol};
  ${(props) =>
    props.active &&
    css`
      cursor: pointer;
      opacity: 1;
    `};
`;

const SlideContainer = styled.div`
  ${(props) =>
    props.paddingX &&
    css`
      &:first-child {
        padding-left: ${props.paddingX};
      }

      &:last-child {
        padding-right: ${props.paddingX};
      }
    `};
`;

const SlideIndicator = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.accentCol
      : ({ theme }) => theme.lineCol};
`;

const Carousel = (props) => {
  const slides = props.children;
  const [slideIndex, setSlideIndex] = useState(0);
  const refs = useRef(slides.map(React.createRef));

  const scrollConfig = {
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  };

  const handleLeftArrowClick = () => scrollLeft();

  const handleRightArrowClick = () => scrollRight();

  const handleSlideIndicatorClick = (index) => scrollToSlide(index);

  const handleScroll = () => {
    const slideRect = refs.current[slideIndex].current.getBoundingClientRect();
    const slideXPosition = Math.floor(slideRect.left);
    const slideWidth = Math.floor(slideRect.width);
    const scrollThreshold = Math.floor(slideWidth / 2);

    slideXPosition <= -1 * scrollThreshold
      ? setSlideIndex((prev) => prev + 1)
      : slideXPosition >= scrollThreshold && setSlideIndex((prev) => prev - 1);
  };

  const scrollLeft = () => slideIndex !== 0 && scrollToSlide(slideIndex - 1);

  const scrollRight = () =>
    slideIndex !== slides.length - 1 && scrollToSlide(slideIndex + 1);

  const scrollToSlide = (slideIndex) => {
    refs.current[slideIndex].current.scrollIntoView(scrollConfig);
    setSlideIndex(slideIndex);
  };

  const getSlideIndicator = () => (
    <div className={styles.slideIndicatorContainer}>
      {props.children.map((_, index) => (
        <SlideIndicator
          className={styles.slideIndicator}
          key={index}
          fixedWidth
          icon={faCircle}
          active={index === slideIndex}
          onClick={() => handleSlideIndicatorClick(index)}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SlideContainer
          paddingX={props.paddingX}
          className={styles.slideContainer}
          onWheel={handleScroll}
        >
          {slides.map((item, index) => (
            <div className={styles.slide} key={index} ref={refs.current[index]}>
              {item}
            </div>
          ))}
        </SlideContainer>
      </div>

      <div className={styles.bottom}>
        {props.displayArrows ? (
          <>
            <ActionButton
              className={styles.actionButton}
              active={slideIndex !== 0}
              onClick={handleLeftArrowClick}
            >
              <FontAwesomeIcon fixedWidth icon={faChevronLeft} />
            </ActionButton>
            {getSlideIndicator()}
            <ActionButton
              className={styles.actionButton}
              active={slideIndex !== slides.length - 1}
              onClick={handleRightArrowClick}
            >
              <FontAwesomeIcon fixedWidth icon={faChevronRight} />
            </ActionButton>
          </>
        ) : (
          getSlideIndicator()
        )}
      </div>
    </div>
  );
};

export default Carousel;
