import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: var(--textLighter);
  }
  strong {
    font-size: 40px;
    color: var(--text);
    margin-top: 10px;
  }
  span {
    font-size: 30px;
    color: var(--chartBar);
    margin-top: 10px;
  }
  p {
    color: var(--chartInfo);
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;
