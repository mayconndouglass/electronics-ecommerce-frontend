import styled from 'styled-components'

export const Container = styled.section`
  display: flex;

  max-width: 1320px;
  margin: 95px auto 0 auto;
  padding: 65px 80px;
  border-radius: 6px;

  background-color: #F6F7FB;

  h2 {
    font-size: 48px;
    font-weight: 700;
    margin: 10px 0 30px 0;
    color: #292930;
    line-height: 1.3;
  }

  .info {
    width: 50%;
  }

  .countdown-container {
    display: flex;
    gap: 15px;

    .countdown {
      height: 80px;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      background-color: white;
      border-radius: 50%;

      span {
        font-size: 24px;
        font-weight: 500;
        color: #000;
        line-height: 1;
        margin-bottom: 5px;
      }

      p {
        line-height: 1;
        font-size: 14px;
        font-weight: 500;
        color: #777;
      }
    }
  }

  .image {
    margin-top: -160px;
  }
`
