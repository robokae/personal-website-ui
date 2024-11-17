import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

const ActionButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: #283137;
  outline: none;
  border: transparent;
  border-radius: 50%;
  opacity: 0.25;
  transition: opacity 0.2s ease-in-out;
  color: ${({ theme }) => theme.secondaryFontCol};
  ${(props) =>
    props.active &&
    css`
      cursor: pointer;
      opacity: 1;
    `};
`;

const NumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

function ArrowIndicator({
  numbers,
  currentSlide,
  numSlides,
  leftArrowClickHandler,
  rightArrowClickHandler,
}) {
  return (
    <>
      <ActionButton active={currentSlide !== 0} onClick={leftArrowClickHandler}>
        <FontAwesomeIcon icon={faArrowLeft} fixedWidth />
      </ActionButton>
      {numbers && (
        <NumbersContainer>
          {`${currentSlide + 1} / ${numSlides}`}
        </NumbersContainer>
      )}
      <ActionButton
        active={currentSlide !== numSlides - 1}
        onClick={rightArrowClickHandler}
      >
        <FontAwesomeIcon icon={faArrowRight} fixedWidth />
      </ActionButton>
    </>
  );
}

export default ArrowIndicator;
