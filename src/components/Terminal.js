import styled from "styled-components";
import { MONOSPACE_FONT, REGULAR_FONT } from "../constants/StyleConstants";

const Container = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(39, 54, 68, 0.8),
    rgba(19, 31, 42, 0.8)
  );
  box-shadow: 0.25rem 0.25rem 2rem rgba(65, 79, 109, 0.2);
  border: 1px solid #20282e;
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
  background-color: #263137;
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
  color: ${({ theme }) => theme.terminalCommandOutputCol};
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

function Terminal({ details, width }) {
  return (
    <Container width={width}>
      <TitleBar>
        <TitleBarButtonContainer>
          <TitleBarButton color="#da5656" />
          <TitleBarButton color="#e0c146" />
          <TitleBarButton color="#42bc55" />
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
