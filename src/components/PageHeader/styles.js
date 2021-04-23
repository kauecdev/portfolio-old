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
    transition: opacity 0.2s;

    &:hover {
      opacity: 1.0;
    }

    a {
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
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