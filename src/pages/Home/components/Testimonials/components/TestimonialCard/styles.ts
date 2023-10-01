import { styled } from 'styled-components'

export const Container = styled.div`
  .message {
    background-color: white;
    border-radius: 10px;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    position: relative;
    box-shadow: 0 16px 32px 0 rgba(0,0,0,.04);

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      color: #777777;

      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 25px solid white;
        border-right: 50px solid rgba(0,0,0,0);
        position: absolute;
        bottom: -25px;
        left: 100px;
      }
    }
  }

.user {
    display: flex;
    align-items: center;
    gap: 20px;

    .info {
      span {
        font-size: .875rem;
        color: #777777;
        line-height: 1.7;
        font-weight: 400;
      }

      h6 {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.3;
        color: #292930;
      }
    }
  }
`
