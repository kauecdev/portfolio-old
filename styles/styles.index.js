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

export const AboutSection = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/assets/images/lines.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 44px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    > div {
      margin-right: 60px;

      p {
        font-size: 20px;
        text-align: justify;
        max-width: 800px;
      }
    }

    figure {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 80%;
      border-radius: 50%;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
    }
  }

  @media screen and (max-width: 800px) {
    height: auto;
    padding: 100px 0 80px 0;
    background-image: url('/assets/images/lines-mobile.svg');
    background-size: 100% 70%;

    > div {
      flex-direction: column;

      > div {
        padding: 40px 0;
        margin-right: 0; 
      }

    }
  }
  
`;

export const ExperienceSection = styled.div`
  width: 100%;
  background-image: url('/assets/images/shapes-experience.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding: 40px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 44px;
    margin-bottom: 40px;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    div#timeline-bar {
      width: 4px;
      height: 650px;
      position: relative;
      background-color: #ffffff;

      .company {
        font-weight: 600;
      }

      div.experience-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;

        img {
          width: 120px;
          margin-right: 80px;
        }

        h3 {
          font-size: 28px;
          line-height: 30px;
        }

        p {
          font-size: 20px;
          line-height: 28px;
        }
      }

      .first-experience {
        min-width: 720px;
        left: -267px;
        top: 50px;

        img.logo {
          width: 180px;
        }
      }

      .second-experience {
        left: -528px;
        top: 320px;
        min-width: 740px;
        text-align: right;

        img {
          transform: rotateY(180deg);
          margin-left: 80px;
          margin-right: 0 !important;
        }
      }
      
    }
  }

  @media screen and (max-width: 800px) {
    background-image: url('/assets/images/shapes-experience-mobile.png');

    > div {
      div#timeline-bar {
        height: 800px !important;

        div.experience-wrapper {
          .logo {
            width: 80px;
          }

          img {
            width: 100px;
          }

          h3 {
            font-size: 20px;
            line-height: 26px;
          }

          p {
            font-size: 16px;
            line-height: 20px;
          }
        }

        .first-experience {
          min-width: 160px;
          left: -164px;

          > div {
            position: absolute;
            top: 60px;
            left: 56%;
          }

          .logo {
            margin-left: 30px;
            margin-right: 50px;
          }
          
        }

        .second-experience {
          min-width: 160px;
          left: -170px;
          top: 380px;

          > div {
            position: absolute;
            top: 60px;
            right: 44%;
          }

          .logo {
            width: 60px !important;
            margin-left: 30px;
            margin-right: 50px;
          }
          
        }
      }
    }
  }
`;

export const ProjectsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;

  h2 {
    font-size: 44px;
    margin-bottom: 40px;
  }

  div.projects-container {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    a {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.1);
      }

      h3 {
        text-align: center;
        font-size: 18px;
        line-height: 20px;
        padding: 0 40px;
      }

      img {
        width: 90%;
      }
    }
  }

  span {
    width: 60%;
    text-align: center;
    margin: 30px 0;
    font-size: 20px;
    line-height: 22px;
  }

  div#go-github {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 40%;
      margin-right: 30px;
    }

    a {
      font-size: 24px;
      font-weight: 600;
      border-radius: 10px;
      background-color: #2D4584;
      padding: 10px 20px;
      text-align: center;
      position: relative;

      img {
        width: 50px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -45px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    div.projects-container {
      flex-wrap: wrap;
      margin: 0;
      
      a {
        width: 100% !important;
        margin-bottom: 30px;
      }
    }

    span {
      width: 80%;
      font-size: 18px;
      line-height: 24px;
    }

    div#go-github {
      flex-direction: column;
      width: 90%;

       > img {
        width: 30%;
        margin-right: 10px;
        margin-bottom: 30px;
      }

      a {
        font-size: 18px;

        img {
          width: 40px;
          right: -36px;
        }
      }
    }
  }
`;

export const ContactSection = styled.div`
  width: 100%;
  padding-top: 20px;

  background-image: url('/assets/images/polygon-luminary.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 44px;
  }

  > div {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;

    a {
      width: 50%;

      img {
        width: 100%;
      }
    }

    form {
      width: 50%;
      display: flex;
      flex-direction: column;

      label {
        span {
          color: red;
        }
      }

      input {
        padding: 10px 8px;
        border: 0;
        border-radius: 6px;
      }

      textarea {
        font-family: Cairo;
        padding: 8px 6px;
        margin-bottom: 20px;
        border: 0;
        border-radius: 6px;
        resize: vertical;
      }

      button {
        max-width: 200px;
        font-size: 20px;
        color: #ffffff;
        background-color: #2D4584;
        border: 0;
        border-radius: 10px;
        padding: 8px 20px;
        cursor: pointer;
      }
    }
  }

  span { 
    font-size: 24px;
    margin: 80px 0 10px;
  }

  @media screen and (max-width: 800px) {
    background-image: url('/assets/images/polygon-luminary-mobile.png');
    background-position: top;
    background-size: 100%;

    h2 {
      line-height: 46px;
      text-align: center;
    }

    > div {
      width: 80%;

      a {
        display: none;
      }

      form {
        width: 100%;
        padding-bottom: 60px;

        textarea {
          margin-bottom: 30px;
        }

        button {
          padding: 12px 20px;
          max-width: 100%;
          width: 100%;
          align-self: center;
        }
      }
    }

    > span {
      display: none;
    } 
  }
`;