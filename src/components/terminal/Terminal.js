import styled from "styled-components";
import {
  MONOSPACE_FONT,
  REGULAR_FONT,
} from "../../constants/TypographyConstants";
import {
  BACKGROUND_GRADIENT_LEFT_COLOR,
  BACKGROUND_GRADIENT_RIGHT_COLOR,
  BORDER_COLOR,
  BOX_SHADOW_COLOR,
  COMMAND_COLOR,
  COMMAND_OUTPUT_COLOR,
  TITLE_BAR_BACKGROUND_COLOR,
  TITLE_BAR_CLOSE_BUTTON_COLOR,
  TITLE_BAR_FONT_COLOR,
  TITLE_BAR_MAXIMIZE_BUTTON_COLOR,
  TITLE_BAR_MINIMIZE_BUTTON_COLOR,
} from "./TerminalConstants";

const Container = styled.div`
  background: linear-gradient(
    to right bottom,
    ${BACKGROUND_GRADIENT_LEFT_COLOR},
    ${BACKGROUND_GRADIENT_RIGHT_COLOR}
  );
  box-shadow: 0.25rem 0.25rem 2rem ${BOX_SHADOW_COLOR};
  border: 1px solid ${BORDER_COLOR};
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: none;
  font-family: ${MONOSPACE_FONT}, monospace;
  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${TITLE_BAR_BACKGROUND_COLOR};
  border-radius: 0.5rem 0.5rem 0 0;
`;

const TitleBarButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-self: flex-start;
`;

const TitleBarButton = styled.div`
  width: 0.85rem;
  height: 0.85rem;
  background-color: ${(props) => props.color};
  border-radius: 5rem;
`;

const TitleBarName = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: ${REGULAR_FONT};
  color: ${TITLE_BAR_FONT_COLOR};
`;

const CommandContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Command = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: ${COMMAND_COLOR};
`;

const Output = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.25rem;
  column-gap: 1.5rem;
  color: ${COMMAND_OUTPUT_COLOR};
`;

function Terminal({ details, width }) {
  return (
    <Container width={width}>
      <TitleBar>
        <TitleBarButtonContainer>
          <TitleBarButton color={TITLE_BAR_CLOSE_BUTTON_COLOR} />
          <TitleBarButton color={TITLE_BAR_MINIMIZE_BUTTON_COLOR} />
          <TitleBarButton color={TITLE_BAR_MAXIMIZE_BUTTON_COLOR} />
        </TitleBarButtonContainer>
        <TitleBarName>{details.titleBar.name}</TitleBarName>
      </TitleBar>
      {details.content.map((terminalDetail, index) => (
        <CommandContainer key={index}>
          <Command>
            <p>{">"}</p>
            <p>{terminalDetail.command}</p>
          </Command>
          <Output>
            {terminalDetail.output.length > 1 ? (
              terminalDetail.output.map((outputEntry, index) => (
                <p key={index}>{outputEntry}</p>
              ))
            ) : (
              <p>{terminalDetail.output}</p>
            )}
          </Output>
        </CommandContainer>
      ))}
    </Container>
  );
}

export default Terminal;
