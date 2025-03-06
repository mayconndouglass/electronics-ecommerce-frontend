import { styled } from 'styled-components'

export const Container = styled.div`
  .message {
    background-color: ${props => props.theme.white};
    border-radius: 0.625rem;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    position: relative;
    box-shadow: 0 16px 32px 0 rgba(0,0,0,.04);

    p {
      font-size: 1rem;
      font-weight: ${props => props.theme['font-w-egular']};
      line-height: 28px;
      color: ${props => props.theme['gray-500']};

      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 1.5625rem solid white;
        border-right: 50px solid rgba(0,0,0,0);
        position: absolute;
        bottom: -25px;
        left: 100px;
      }
    }

    @media screen and (max-width: 1200px){
      padding: 1.5rem;
    }

    @media screen and (max-width: 460px){
      padding: 1rem;
    }
  }

.user {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    .info {
      span {
        font-size: .875rem;
        color: ${props => props.theme['gray-500']};
        line-height: 1.7;
        font-weight: ${props => props.theme['font-w-egular']};
      }

      h6 {
        font-size: 1.125rem;
        font-weight: ${props => props.theme['font-w-medium']};
        line-height: 1.3;
        color: ${props => props.theme['gray-900']};
      }
    }
  }
`
