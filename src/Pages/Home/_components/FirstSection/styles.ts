import styled from "styled-components"

export const ContainerFirstSection = styled.section`
  z-index: 0;
  overflow: hidden;
  position: relative;
  margin: auto;
  padding: 0 100px;
  display: grid;
  grid-template-columns: 3fr 4fr;

  div {
    z-index: 1;
    margin: center;
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;

    h3 {
      position: relative;
      max-width: 500px;
      color: ${({ theme }) => theme.colors.primary};

      &:before {
        content: "";
        position: absolute;
        top: -30px;
        width: 110px;
        height: 3px;
        background-color: ${({ theme }) => theme.colors.secondary};
      }

      span {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: ${({ theme }) => theme.fonts.h3};
      }
    }

    div {
      padding: 0;
      flex-direction: row;
      justify-content: start;
    }
  }

  img {
    padding-right: 50px;
    max-width: 100%;
    max-height: 750px;

    &:last-child {
      width: 900px;
    position: absolute;
    bottom: -355px;
    left: -20%;
    }
  }

  @media (max-width: 1400px) {
    padding: 50px 80px;

    div {
      padding-left: 10px;
    }

    img:last-child {
      width: 400px;
      bottom: -150px;
    }
  }

  @media (max-width: 1200px) {
    padding: 50px;
    grid-template-columns: 2fr 3fr;

    div {
      padding-left: 0px;

      h3:before {
        top: -10px;
      }
    }

    img {
      padding-right: 0px;

      &:last-child {
        width: 300px;
        bottom: -100px;
        left: -10%;
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    padding: 100px;

    div {
      gap: 50px;

      h3 {
        max-width: 100%;

        &:hover{
          width: 130px;
        }
      }
      p {
        max-width: 500px;
      }
    }

    img {
      position: absolute;
      width: 40%;
      bottom: 0;
      right: 0;

      &:last-child {
        width: 200px;
        height: 200px;
        left: 10%;
        bottom: 20px;
      }
    }
  }

  @media (max-width: 400px) {
    padding: 30px;
    flex-direction: column;
    align-items: flex-end;

    > div {
      gap: 30px;

      div {
        gap: 10px;
      }
    }

    img {
      position: relative;
      left: auto;
      right: 0;
      width: 70%;

      &:last-child {
        position: absolute;
        width: 100px;
      }
    }
  }
`