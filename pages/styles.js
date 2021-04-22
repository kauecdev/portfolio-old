import styled from 'styled-components';

export const HomeSection = styled.div`
  width: 100%;
  max-height: 100vh;
  background-image: url('assets/images/shapes.png');
  background-position: cover;
  background-size: 100%;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 80px;

    figure {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70%;
      }
    }
  }
`;

export const TextBlock = styled.div`
  width: 50%;
  color: #ffffff;
  
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: 300;
    font-size: 30px;
    line-height: 34px;
  }

  span.myName {
    font-weight: 700;
    font-size: 80px;
    line-height: 70px;
  }

  span.subtitle {
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;
    margin-bottom: 20px;
  }

  a {
    width: 50%;
    font-size: 24px;
    border-radius: 10px;
    background-color: #2D4584;
    padding: 10px 20px;
    text-align: center;
    position: relative;

    img {
      position: absolute;
      bottom: -68px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;