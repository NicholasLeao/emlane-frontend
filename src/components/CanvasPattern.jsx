import styled from "styled-components";

function CanvasPattern() {
  return (
    <StyledDiv>
      <svg
        style={{ backgroundColor: "#e6e6e6" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width="32px"
            height="32px"
          >
            <path
              d="M6,0 l0,12 M0,6 l12,0"
              stroke="currentcolor"
              style={{ stroke: "black", opacity: "10%" }}
            />
          </pattern>
        </defs>

        <rect x="0" width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </StyledDiv>
  );
}

export default CanvasPattern;

const StyledDiv = styled.div`
  & svg {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;
