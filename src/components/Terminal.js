import styled from "styled-components";
import {
  MONOSPACE_FONT,
  TERMINAL_BG,
  TERMINAL_BORDER_COLOR,
} from "../constants/StyleConstants";

const Container = styled.div`
  padding: 1.5rem;
  background: ${TERMINAL_BG};
  box-shadow: 0.25rem 0.25rem 2rem rgba(65, 79, 109, 0.2);
  backdrop-filter: blur(2rem);
  backface-visibility: hidden;
  border: 1px solid ${TERMINAL_BORDER_COLOR};
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: none;
  font-family: ${MONOSPACE_FONT}, monospace;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CommandContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Command = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: ${({ theme }) => theme.terminalCommandCol};
`;

const Output = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 0.25rem;
  column-gap: 1.5rem;
  color: ${({ theme }) => theme.terminalCommandOutputCol};
`;

function Terminal({ terminalDetails, width }) {
  return (
    <Container width={width}>
      {terminalDetails.map((terminalDetail, index) => (
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
