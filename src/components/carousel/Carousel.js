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
      setSlideProps((current) => ({
        ...current,
        gap: carouselRef.current.children[0].getBoundingClientRect().left / 2,
      }));
    }
  }, []);

  const scrollLeft = () => {
    if (currentSlide !== 0) {
      carouselRef.current.scrollTo({
        left:
          carouselRef.current.scrollLeft - (slideProps.width + slideProps.gap),
        behavior: "smooth",
      });
      setCurrentSlide((current) => current - 1);
    }
  };

  const scrollRight = () => {
    if (currentSlide !== slides.length - 1) {
      carouselRef.current.scrollTo({
        left:
          carouselRef.current.scrollLeft + (slideProps.width + slideProps.gap),
        behavior: "smooth",
      });
      setCurrentSlide((current) => current + 1);
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
        <SlideContainer paddingX={props.paddingX} ref={carouselRef}>
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
