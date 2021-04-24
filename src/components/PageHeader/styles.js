import styled from 'styled-components';

export const Header = styled.header`
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

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    align-items: center;

    a {
    }

    nav {
      display: none;
    }
  }
`;