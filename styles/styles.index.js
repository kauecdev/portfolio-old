import styled from 'styled-components';

export const HomeSection = styled.div`
  width: 100%;
  max-height: 100vh;
  background-image: url('assets/images/shapes.png');
  background-position: cover;
  background-repeat: no-repeat;
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

  #go-about {
    width: 50%;
    font-size: 24px;
    font-weight: 600;
    border-radius: 10px;
    background-color: #2D4584;
    color: #ffffff;
    padding: 10px 20px;
    text-align: center;
    position: relative;
    top: -80px;
    left: 80px;

    img {
      position: absolute;
      bottom: -68px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 800px) {
    background-image: url('assets/images/shapes-mobile.png');
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > div {
      padding: 0 20px;
      flex-direction: column;

      figure {
        width: 100%;
      }
    }

    a#go-about {
      top: 40px;
      left: 0;

      font-size: 16px;

      img {
        bottom: -34px;
        width: 20px;
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

  @media screen and (max-width: 800px) {
    text-align: center;
    width: 100%;

    p {
      font-size: 24px;
      line-height: 24px;
    }

    span.myName {
      font-size: 40px;
      line-height: 40px;
    }

    span.subtitle {
      font-size: 22px;
      line-height: 24px;
    }
  }
`;