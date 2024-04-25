import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

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

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

const Item = styled.div`
  width: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  flex-shrink: 0;
`;

const CarouselBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ActionButton = styled.button`
  font-size: 1.25rem;
  background-color: transparent;
  color: ${({ theme }) => theme.primaryFontCol};
  outline: none;
  border: transparent;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accentCol};
    background-color: ${({ theme }) => theme.secondaryBgCol};
  }
`;

const ItemIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const ItemIndicator = styled(FontAwesomeIcon)`
  font-size: 0.5rem;
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.accentCol
      : ({ theme }) => theme.lineCol};
`;

const Carousel = ({ children }) => {
  const numItems = children.length;
  const [items, setItems] = useState(children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? numItems - 1 : --previousIndex
    );
    items.unshift(items.pop());
    setItems(items);
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === numItems - 1 ? 0 : ++previousIndex
    );
    items.push(items.shift());
    setItems(items);
  };

  return (
    <CarouselContainer>
      <CarouselTop>
        <ActionButton onClick={handleLeftArrowClick}>
          <FontAwesomeIcon fixedWidth icon={faChevronLeft} />
        </ActionButton>
        <ItemContainer>
          {items.map((item, index) => (
            <Item key={index} active={item === items[0]}>
              {item}
            </Item>
          ))}
        </ItemContainer>
        <ActionButton onClick={handleRightArrowClick}>
          <FontAwesomeIcon fixedWidth icon={faChevronRight} />
        </ActionButton>
      </CarouselTop>
      <CarouselBottom>
        <ItemIndicatorContainer>
          {children.map((_, index) => (
            <ItemIndicator
              key={index}
              fixedWidth
              icon={faCircle}
              active={index === currentIndex}
            />
          ))}
        </ItemIndicatorContainer>
      </CarouselBottom>
    </CarouselContainer>
  );
};

export default Carousel;
