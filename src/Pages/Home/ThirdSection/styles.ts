import styled from "styled-components"

export const Container = styled.section`
  margin: auto;
  padding: 100px 200px;
  max-width: 1920px;
  text-align: center;
  background: linear-gradient(
    ${({ theme }) => theme.colors.whitePrimary} 55%,
    ${({ theme }) => theme.colors.secondary} 45%
  );

  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  h3 {
    margin-top: 20px;
  }

  div {
    margin: 40px auto;
    display: flex;
    justify-content: center;
    gap: 30px;

    h4 {
      padding: 20px 40px;
      transition: 0.3s all ease-in;
      border: 1px solid transparent;
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    li {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 5px;
      text-align: start;

      img {
        width: 100%;
        max-height: 300px;
        border-radius: 24px;
      }
    }
  }

  button {
    z-index: 2;
    position: relative;
    bottom: -125px;
  }
`
