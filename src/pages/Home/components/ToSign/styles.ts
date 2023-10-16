import { styled } from 'styled-components'

export const Container = styled.section`
  margin-bottom: 80px;

  .posts-container {
    display: flex;
    justify-content: space-between;
    gap: 1.875rem;

    margin-bottom: 30px;

    @media screen and (max-width: 990px){
      flex-direction: column;
    }
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
        font-weight: ${props => props.theme['font-w-egular']};
        height: auto;
        line-height: 60px;
        background: ${props => props.theme.white};
        box-shadow: none;
        padding: 0 30px 0 66px;
        outline: none;
        border: none;
        border-radius: 6px;
        margin-bottom: 1rem;

        @media screen and (max-width: 490px) {
          width: 100%;
        }
      }

      @media screen and (max-width: 750px) {
        flex-direction: column;
        gap: 0;

        & > div:last-child {
         align-self: start;
        }
      }
    }

    @media screen and (max-width: 990px) {
      background-position: center;
      padding: 5rem 1.875rem 4.0625rem;
    }

    @media screen and (max-width: 370px) {
      h2 {
        font-size: 1.25rem;
      }
    }

    @media screen and (max-width: 300px) {
      padding: 3rem 0.875rem 2.06rem;
    }
  }
`
