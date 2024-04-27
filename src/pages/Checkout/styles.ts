import styled from 'styled-components'

export const Container = styled.section`
  padding: 5rem 0;

  & > div {
    display: flex;
    gap: 30px;
    //TODO: Resolveu o SELECT do state, porém quando fui pedir ajuda para resolver o mesmo BO do data of birth, ele recomendou usar useState, agora não sei qual seria a forma correta, e o calculo da idade está errada, a minha idade deu 28 anos
    .user-information {
      width: 50%;

      .coupon-form {
        flex-direction: row;

        & > div:first-child {
          width: 50%;
        }

        & > div:last-child {
          button {
            height: 100%;
            font-size: 1rem;
          }
        }
      }

      .data {
        display: flex;
        flex-direction: column;
        gap: 30px;

        h4 {
          font-size: 1.5rem;
          font-weight: ${props => props.theme['font-w-medium']};
          color: ${props => props.theme['gray-900']};
          line-height: 1.3;
        }

        .form-name {
          display: flex;
          gap: 30px;

          & > div {
            width: 50%;
          }
        }

        .form-type-person {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6rem;

          label {
            display: flex;
            align-items: center;
            gap: 10px;

            font-size: 1rem;
            font-weight: ${props => props.theme['font-w-egular']};
            color: ${props => props.theme['gray-500']};
            line-height: 20px;
            cursor: pointer;
          }
        }

        .phone {
          display: flex;
          gap: 30px;

          & > div {
            width: 50%;
          }
        }

        .date-of-birth {
          #birthdate  {
            color: ${props => props.theme['gray-500']};
          }

          .selected-date {
            color: ${props => props.theme['gray-900']} !important;
          }
        }

        .address {
          display: flex;
          flex-direction: column;
          gap: 30px;

          .street {
            display: flex;
            gap: 30px;

            & > div:first-child {
              width: 70%;
            }

            & > div:last-child {
              width: 30%;
            }
          }

          .state-city {
            display: flex;
            gap: 30px;

            & > div:first-child {
              width: 35%;
              position: relative;
            }

            & > div:last-child {
              width: 65%;
            }

            span {
              color: #E76458;
            }

            label {
              display: block;
              position: absolute;
              top: -11px;
              left: 20px;
              padding: 0 0.625rem;

              font-size: 0.875rem;
              font-weight: ${props => props.theme['font-w-medium']};
              line-height: 1.3;
              color: ${props => props.theme['gray-500']};
              background: ${props => props.theme.white};
              z-index: 4;
            }

            .selected-option {
              color: ${props => props.theme['gray-900']};
            }

            select {
              border-color: #CBD3D9;

              cursor: pointer;
              transition: .3s;
              /* height: 60.2px; */
              /* padding: 0 30px; */
              outline: none;
              color: ${props => props.theme['gray-500']};
              -moz-appearance: none;
              -webkit-appearance: none;
              appearance: none;
              border: 1px solid #E3E6E9;
              border-radius: 6px;
              background: url(../../../public/assets/images/arrow-icon.png) 95% center no-repeat rgba(0,0,0,0);
              padding: 1.25rem;
              font-size: 1rem;
              line-height: 1.3;

              background-color: white;

              width: 100%;
              transition: all 0.4s ease-out 0s;
              width: 100%;
              &:focus,
              &:active {
                outline: none;
                border-color: #3577f0;
              }

              overflow: hidden;
              -webkit-appearance:none;
              -moz-appearance:none;
              -ms-appearance:none;
              appearance:none;
            }
          }

          input[type="number"] {
            -moz-appearance: textfield;
           }

          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
      }
    }

    .purchase-information {
      width: 50%;
      background-color: #F9F3F0;
      border-radius: 6px;
      padding: 40px;

      h5 {
        font-size: 1.25rem;
        font-weight: ${props => props.theme['font-w-medium']};
        line-height: 1.3;
        color: ${props => props.theme['gray-900']};
        margin-bottom: 20px;
      }

      .product-table {
        background-color: white;
        border-radius: 6px;
        padding: 30px;
        margin-bottom: 45px;

        ul {
          li {
            display: flex;
            justify-content: space-between;

            border-bottom: 1px solid #CBD3D9;
            padding: 20px 0;
            font-size: 1rem;
            font-weight: ${props => props.theme['font-w-egular']};
            color: ${props => props.theme['gray-900']};
          }

          li:first-child {
            h5, span {
              font-size: 1.25rem;
              font-weight: ${props => props.theme['font-w-medium']};
              color: ${props => props.theme['gray-900']};
              margin: 0;
            }
          }

          .shipping-method {
            flex-direction: column;

            h6 {
              font-size: 1rem;
              font-weight: ${props => props.theme['font-w-medium']};
              color: ${props => props.theme['gray-900']};
            }

            .shipping-method-title {
              display: flex;
              justify-content: space-between;
              margin-bottom: 12px;
            }

            label {
              display: flex;
              align-items: center;
              gap: 10px;

              font-size: 1rem;
              font-weight: ${props => props.theme['font-w-egular']};
              color: ${props => props.theme['gray-500']};
              line-height: 20px;
              cursor: pointer;
              margin-bottom: 5px;
            }
          }

          .total-order {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      }

      .payment-method {
        li {
          border-bottom: 1px solid #CBD3D9;
          margin-bottom: 20px;
        }

        label {
          display: flex;
          align-items: center;
          gap: 10px;

          font-size: 1.25rem;
          font-weight: ${props => props.theme['font-w-egular']};
          line-height: 20px;
          color: ${props => props.theme['gray-900']};
          cursor: pointer;
          margin-bottom: 20px;

          img {
            margin-left: auto;
          }
        }

        p {
          font-size: 1rem;
          line-height: 1.7;
          font-weight: ${props => props.theme['font-w-egular']};
          color: ${props => props.theme['gray-500']};
          padding-left: 28px;
          margin-bottom: 30px;
        }
      }

      button {
        width: 100%;
      }
    }
  }
`
