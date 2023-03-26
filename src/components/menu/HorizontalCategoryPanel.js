import styled from "styled-components";

const MenuPanel = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.lineCol};
  position: relative;
`;

const MenuOption = styled.button`
  position: relative;
  bottom: -2px;
  padding: 0.75rem 2rem;
  background-color: transparent;
  border: none;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) =>
    props.isSelected ? props.borderColor : "transparent"};
  color: ${({ theme }) => theme.primaryFontCol};
  cursor: pointer;
`;

function HorizontalCategoryPanel({ content, currentlySelected, setCategory }) {
  return (
    <MenuPanel>
      {content.map((item) => {
        return (
          <MenuOption
            isSelected={currentlySelected === item.id}
            borderColor={({ theme }) => theme.accentCol}
            key={item.id}
            onClick={() => setCategory(item.id)}
          >
            {item.name}
          </MenuOption>
        );
      })}
    </MenuPanel>
  );
}

export default HorizontalCategoryPanel;
