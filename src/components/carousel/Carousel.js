import React, { useEffect, useRef, useState } from "react";
import {
  Bottom,
  Container,
  Slide,
  SlideContainer,
  SlideIndicatorContainer,
  Top,
} from "./Carousel.styles";
import { useResize } from "hooks/useResize";
import ArrowIndicator from "./ArrowIndicator";

const Carousel = ({ paddingX, arrows, children: slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef(slides.map(React.createRef));
  const carouselRef = useRef(null);
  const [slideInitialPosition, setSlideInitialPosition] = useState(null);
  const [slideWidth, setSlideWidth] = useState(null);
  const { width } = useResize();
  const scrollConfig = { behavior: "smooth" };
  const [touchStart, setTouchStart] = useState(null);
  const TOUCH_MOVE_THRESHOLD = 8;

  useEffect(() => {
    if (carouselRef.current) {
      const { left, width } =
        carouselRef.current.children[currentSlide].getBoundingClientRect();
      setSlideWidth(width);
      setSlideInitialPosition(left);
    }
  }, [width]);

  const isNotFirstSlide = (slideIndex) => slideIndex !== 0;
  const isNotLastSlide = (slideIndex) => slideIndex !== slides.length - 1;

  const scrollToPreviousSlide = () => {
    if (isNotFirstSlide(currentSlide)) {
      carouselRef.current.children[currentSlide - 1].scrollIntoView(
        scrollConfig
      );
      setCurrentSlide((current) => current - 1);
    }
  };

  const scrollToNextSlide = () => {
    if (isNotLastSlide(currentSlide)) {
      carouselRef.current.children[currentSlide + 1].scrollIntoView(
        scrollConfig
      );
      setCurrentSlide((current) => current + 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchStart;
    const isTouchMoveOverThreshold = Math.abs(delta) > TOUCH_MOVE_THRESHOLD;
    if (isTouchMoveOverThreshold) {
      if (delta < 0 && isNotLastSlide(currentSlide)) {
        setCurrentSlide((prevSlide) => prevSlide + 1);
      } else if (delta > 0 && isNotFirstSlide(currentSlide)) {
        setCurrentSlide((prevSlide) => prevSlide - 1);
      }
    }
  };

  const handleWheel = () => {
    const { x: offset } =
      carouselRef.current.children[currentSlide].getBoundingClientRect();
    const delta = offset - slideInitialPosition;

    if (delta < (-1 * slideWidth) / 2 && isNotLastSlide(currentSlide)) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    } else if (delta > slideWidth / 2 && isNotFirstSlide(currentSlide)) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const DefaultSlideIndicator = () => (
    <SlideIndicatorContainer>
      {`${currentSlide + 1} / ${slides.length}`}
    </SlideIndicatorContainer>
  );

  return (
    <Container>
      <Top>
        <SlideContainer
          paddingX={paddingX}
          ref={carouselRef}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((item, index) => {
            return (
              <Slide key={index} ref={slideRefs.current[index]}>
                {item}
              </Slide>
            );
          })}
        </SlideContainer>
      </Top>

      <Bottom>
        {arrows ? (
          <ArrowIndicator
            numbers
            currentSlide={currentSlide}
            numSlides={slides.length}
            leftArrowClickHandler={scrollToPreviousSlide}
            rightArrowClickHandler={scrollToNextSlide}
          />
        ) : (
          <DefaultSlideIndicator />
        )}
      </Bottom>
    </Container>
  );
};

export default Carousel;
