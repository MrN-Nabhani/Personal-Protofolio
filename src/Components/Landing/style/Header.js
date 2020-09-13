import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
	from{
		left: 0px;
		opacity: 0;
	}

	to{
        left: 1rem;
		opacity: 1;
    }
`;

const animation = (props) => css`
    ${fadeIn} 2s ease ${props.animationDelay};
    animation-fill-mode: forwards;
`;

const Header = styled.h3`
  opacity: 0;
  position: relative;
  animation: ${animation};
`;

export default Header;
