import styled from 'styled-components';

export const StyledA = styled.a`
  text-decoration: none;
  &:link {
    color: none;
  }
  &:visited {
    color: white;
  }
  &:active {
    color: blue;
  }
`;
