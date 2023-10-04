import { styled } from 'styled-components'

export const Container = styled.section`
  margin-bottom: 80px;

  .posts-container {
    display: flex;
    justify-content: space-between;
    gap: 1.875rem;

    margin-bottom: 30px;
  }

  .newsletter {
    padding: 6.25rem 6.6875rem 5.3125rem;
    border-radius: 6px;

    background-image: url("../../../../../public/assets/images/bg-image-tosign.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    h2 {
      margin-bottom: 1.875rem;
    }

    .input-container {
      display: flex;
      gap: 1.125rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 30px;
        background: url('../../../../../public/assets/images/send-mail.png') no-repeat;
        z-index: 2;
        top: 17px;
        width: 25px;
        height: 25px;
      }

      input {
        width: 390px;

        font-size: 0.875rem;
        font-weight: 400;
        height: auto;
        line-height: 60px;
        background: #fff;
        box-shadow: none;
        padding: 0 30px 0 66px;
        outline: none;
        border: none;
        border-radius: 6px;
        margin-bottom: 1rem;
      }
    }
  }
`
