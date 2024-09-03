import {
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { scrollConfig } from "../../config/ScrollConfig";
import {
  ActionButton,
  Bottom,
  Container,
  Slide,
  SlideContainer,
  SlideIndicator,
  SlideIndicatorContainer,
  Top,
} from "./Carousel.styles";

const Carousel = (props) => {
  const slides = props.children;
  const [slideIndex, setSlideIndex] = useState(0);
  const refs = useRef(slides.map(React.createRef));

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

  const SlideIndicator = () => (
    <SlideIndicatorContainer>
      <p>{`${slideIndex + 1} / ${slides.length}`}</p>
    </SlideIndicatorContainer>
  );

  return (
    <Container>
      <Top>
        <SlideContainer
          paddingX={props.paddingX}
          enableScroll={props.enableScroll}
          onWheel={props.enableScroll && handleScroll}
        >
          {slides.map((item, index) => (
            <Slide key={index} ref={refs.current[index]}>
              {item}
            </Slide>
          ))}
        </SlideContainer>
      </Top>

      <Bottom>
        {props.displayArrows ? (
          <>
            <ActionButton
              active={slideIndex !== 0}
              onClick={handleLeftArrowClick}
            >
              <FontAwesomeIcon fixedWidth icon={faArrowLeft} />
            </ActionButton>
            <SlideIndicator />
            <ActionButton
              active={slideIndex !== slides.length - 1}
              onClick={handleRightArrowClick}
            >
              <FontAwesomeIcon fixedWidth icon={faArrowRight} />
            </ActionButton>
          </>
        ) : (
          <SlideIndicator />
        )}
      </Bottom>
    </Container>
  );
};

export default Carousel;
