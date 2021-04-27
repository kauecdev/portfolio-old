import styled from 'styled-components';

export const Header = styled.header`
  div#header-desktop {

    width: 100%;
    padding: 20px 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      list-style-type: none;
      display: inline-block;
      margin: 0 30px;

      a {
        background: linear-gradient(
        to bottom, #2D4584 0%,
        #2D4584 100%
        );
        background-position: 0 100%;
        background-repeat: repeat-x;
        background-size: 0px 0px;
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
        transition: background-size 0.3s;

        &:hover {
          background-size: 20px 4px;
        }
      }
    }
  }

  div#header-mobile-container {
    display: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;

    div#header-desktop {
      display: none;
    }

    #hamburguer {
      position: absolute;
      z-index: 3;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    div#header-mobile {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      position: fixed;
      z-index: 2;
      padding: 30px 0;
      background-color: #2D4584;

      display: flex;
      flex-direction: column;
      align-items: center;
      
      li {
        list-style-type: none;
        text-align: center;
        margin: 30px 0;

        font-size: 24px;
        font-weight: 700;
      }

      > div {
        margin-top: 40px;

        a {
          margin: 0 30px;
        }
      }
    }
  }
`;