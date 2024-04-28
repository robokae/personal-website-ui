import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CarouselTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  scrollbar-width: none;
  gap: 1rem;
`;

const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
`;

const CarouselBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const ActionButton = styled.button`
  font-size: 1.25rem;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.secondaryFontCol};
  border: transparent;
  border-radius: 50%;
  ${(props) =>
    props.active &&
    css`
      cursor: pointer;
    `};
`;

const SlideIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SlideIndicator = styled(FontAwesomeIcon)`
  font-size: 0.5rem;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.accentCol
      : ({ theme }) => theme.lineCol};
  cursor: pointer;
`;

const Carousel = ({ children }) => {
  const slides = children;
  const [slideIndex, setSlideIndex] = useState(0);
  const refs = useRef(slides.map(React.createRef));

  const handleLeftArrowClick = () => {
    if (slideIndex === 0) {
      return;
    }
    const nextSlideIndex = slideIndex - 1;
    scrollToSlide(nextSlideIndex);
  };

  const handleRightArrowClick = () => {
    if (slideIndex === slides.length - 1) {
      return;
    }
    const nextSlideIndex =
      slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
    scrollToSlide(nextSlideIndex);
  };

  const scrollToSlide = (slideIndex) => {
    setSlideIndex(slideIndex);
    refs.current[slideIndex].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSlideIndicatorClick = (index) => {
    scrollToSlide(index);
  };

  return (
    <CarouselContainer>
      <CarouselTop>
        <SlideContainer>
          {slides.map((item, index) => (
            <Slide key={index} ref={refs.current[index]}>
              {item}
            </Slide>
          ))}
        </SlideContainer>
      </CarouselTop>
      <CarouselBottom>
        <ActionButton
          active={slideIndex === 0 ? false : true}
          onClick={handleLeftArrowClick}
        >
          <FontAwesomeIcon fixedWidth icon={faArrowLeft} />
        </ActionButton>
        <SlideIndicatorContainer>
          {children.map((_, index) => (
            <SlideIndicator
              key={index}
              fixedWidth
              icon={faCircle}
              active={index === slideIndex}
              onClick={() => handleSlideIndicatorClick(index)}
            />
          ))}
        </SlideIndicatorContainer>
        <ActionButton
          active={slideIndex === slides.length - 1 ? false : true}
          onClick={handleRightArrowClick}
        >
          <FontAwesomeIcon fixedWidth icon={faArrowRight} />
        </ActionButton>
      </CarouselBottom>
    </CarouselContainer>
  );
};

export default Carousel;
