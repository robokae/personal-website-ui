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

const Carousel = (props) => {
  const slides = props.children;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef(slides.map(React.createRef));
  const carouselRef = useRef(null);
  const [slideProps, setSlideProps] = useState(0);
  const { width } = useResize();
  const scrollThreshold = props.scrollThreshold ?? 128;

  useEffect(() => {
    if (carouselRef.current) {
      setSlideProps((current) => ({
        ...current,
        width:
          carouselRef.current.children[currentSlide].getBoundingClientRect()
            .width,
      }));
    }
  }, [currentSlide, width]);

  useEffect(() => {
    if (carouselRef.current) {
      const { left } = carouselRef.current.children[0].getBoundingClientRect();
      setSlideProps((current) => ({
        ...current,
        gap: left / 2,
        initialPosition: left,
      }));
    }
  }, []);

  const scrollLeft = (delta) => {
    if (currentSlide !== 0) {
      const newPosition =
        carouselRef.current.scrollLeft - (slideProps.width + slideProps.gap);

      // Delta is used during onWheel when the slide has been partially scrolled
      carouselRef.current.scrollTo({
        left: delta > 0 ? newPosition + delta : newPosition,
        behavior: "smooth",
      });

      setCurrentSlide((current) => current - 1);
    }
  };

  const scrollRight = (delta) => {
    if (currentSlide !== slides.length - 1) {
      const newPosition =
        carouselRef.current.scrollLeft + (slideProps.width + slideProps.gap);

      // Delta is used during onWheel when the slide has been partially scrolled
      carouselRef.current.scrollTo({
        left: delta > 0 ? newPosition - delta : newPosition,
        behavior: "smooth",
      });

      setCurrentSlide((current) => current + 1);
    }
  };

  const handleWheel = (e) => {
    const currentPosition =
      slideRefs.current[currentSlide].current.getBoundingClientRect().x;
    let delta = slideProps.initialPosition - currentPosition;

    if (delta >= scrollThreshold && e.deltaX > 0) {
      scrollRight(Math.abs(delta));
    } else if (delta <= -1 * scrollThreshold && e.deltaX < 0) {
      scrollLeft(Math.abs(delta));
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
          paddingX={props.paddingX}
          ref={carouselRef}
          onWheel={handleWheel}
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
        {props.arrows ? (
          <ArrowIndicator
            numbers
            currentSlide={currentSlide}
            numSlides={slides.length}
            leftArrowClickHandler={scrollLeft}
            rightArrowClickHandler={scrollRight}
          />
        ) : (
          <DefaultSlideIndicator />
        )}
      </Bottom>
    </Container>
  );
};

export default Carousel;
