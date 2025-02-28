import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;

  & > div {
    .header-container {
      display: flex;
      justify-content: space-between;

      margin-bottom: 20px;

      h4 {
        font-size: 1.5rem;
        font-weight: ${props => props.theme['font-w-medium']};
        line-height: 1.3;
        color: ${props => props.theme['gray-900']};
      }

      span {
        font-size: 0.875rem;
        font-weight: ${props => props.theme['font-w-egular']};
        line-height: 1.7;
        color: ${props => props.theme['blue-400']};

        transition: 0.3s;

        &:hover {
          cursor: pointer;
          color: ${props => props.theme['gray-900']};
        }
      }
    }

    .products-container {
      margin-top: 40px;
    }

    ul {
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 40%;
          margin: 0 auto;
        }
      }

      & > li:first-child {
        display: grid;
        grid-template-columns: repeat(6, 1fr);

        font-size: 1.25rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: ${props => props.theme['gray-900']};
        background-color: ${props => props.theme['slate-50']};
        padding: 1.125rem 0;

        & > span:first-child {
          margin-left: 4.5rem;
          grid-column: 1/4;
        }
      }
    }

    .subtotal-container {
      display: flex;
      margin-top: 2.5rem;

      button {
        font-size: 1rem;
        line-height: 1.7;
        font-weight: ${props => props.theme['font-w-bold']};
        color: ${props => props.theme['gray-900']};
        background-color: white;

        padding: 1rem 2.375rem;
        border-width: 2px;
        border: 2px solid #efefef;
        border-radius: 6px;
        transition: all .3s ease-in-out;

        &:hover {
          background-color: ${props => props.theme['blue-600']};
          color: white;
          cursor: pointer;
          border-color: ${props => props.theme['blue-600']};
        }

        @media screen and (max-width: 990px) {
          padding: 0.75rem 1.5rem;
          font-size: 0.875rem;
        }
      }

      .coupon {
        display: flex;
        align-items: end;
        gap: 1.5rem;
        width: 50%;

        input {
          width: 100%;
          padding: 0;
          border: none;
          border-bottom: 2px solid #efefef;

          font-size: 0.875rem;
          font-weight: ${props => props.theme['font-w-egular']};
          height: auto;
          line-height: 60px;
          background: #fff;
          padding: 0 30px;
          outline: none;
          color: ${props => props.theme['gray-900']};
        }

        @media screen and (max-width: 990px) {
          flex-direction: column;
        }

        @media screen and (max-width: 450px) {
          display: none;
        }
      }

      .subtotal {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        gap: 1.5rem;

        font-size: 1.25rem;
        font-weight: ${props => props.theme['font-w-medium']};
        color: ${props => props.theme['gray-900']};

        width: 50%;

        & > div {
          display: flex;
          gap: 1.5rem;

          span {
            color: #777777;
          }
        }

        @media screen and (max-width: 450px) {
          width: 100%;
        }
      }

      @media screen and (max-width: 990px) {
        .subtotal {
          font-size: 1rem;
        }
      }
    }
  }
`
