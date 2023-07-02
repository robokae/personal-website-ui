import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggle = styled.button`
  background-color: ${({ theme }) => theme.secondaryBgCol};
  color: ${({ theme }) => theme.primaryFontCol};
  border: 1px solid ${({ theme }) => theme.lineCol};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
  }
`;

function MenuThemeSwitcher({ content, theme, onChangeTheme }) {
  const getThemeSpecificContent = (theme, content, contentName) => {
    return content[theme][contentName];
  };

  return (
    <Container>
      <p>{content.label}</p>
      <ThemeToggle onClick={onChangeTheme}>
        <FontAwesomeIcon
          icon={getThemeSpecificContent(theme, content.options, "icon")}
        />
        <p>{getThemeSpecificContent(theme, content.options, "text")}</p>
      </ThemeToggle>
    </Container>
  );
}

export default MenuThemeSwitcher;
