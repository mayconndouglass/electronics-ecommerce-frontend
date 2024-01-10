import { styled } from 'styled-components'

export const Container = styled.section`
  main {

    .about-store {
      display: flex;
      align-items: center;
      gap: 5rem;

      padding: 5rem 0;

      .about-store-image {
        img {
          width: 410px;
          height: 480px;
          border-radius: 10px;
        }
      }

      .about-store-text {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        span {
          font-size: 1.25rem;

        }

        span, .about-store-paragraphs {
          font-weight: ${props => props.theme['font-w-egular']};
          line-height: 1.7;
          color: ${props => props.theme['gray-500']};
        }

        .about-store-paragraphs {
          display: flex;
          font-size: 14px;

          p {
            width: 50%;
          }
        }
      }
    }

    .about-info-area {
      position: relative;

      &::before {
        content: "";
        height: 50%;
        width: 100%;
        background-color: #f6f6f6;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }

      & > div {
        display: flex;
        gap: 2.5rem;
      }

      .about-info-card {
        margin-bottom: 30px;
        padding: 2.5rem 3.125rem;
        border: 1px solid white;
        border-radius: 5px;
        box-shadow: 0 16px 32px 0 rgba(0,0,0,.04);
        background-color: white;
        transition: 0.3s;

        &:hover {
          border-color: ${props => props.theme['blue-400']};
        }

        img {
          max-width: 100%;
          margin-bottom: 26px;
        }

        h6 {
          font-size: 1.125rem;
          font-weight: ${props => props.theme['font-w-bold']};
          color: ${props => props.theme['gray-900']};
          margin-bottom: 12px;
        }

        p {
          font-size: 0.875rem;
          font-weight: ${props => props.theme['font-w-egular']};
          line-height: 1.7;
          color: ${props => props.theme['gray-500']};
        }
      }
    }

    .our-team {
      padding: 50px 0;
      background-color: #F6F6F6;

      h2 {
        margin-bottom: 40px;
      }

      .team {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .card-team {
          width: 293px;
          padding-bottom: 20px;

          & > div {
            overflow: hidden;
            border-radius: 6px;
            margin-bottom: 12px;
          }

          img {
            width: 100%;
            border-radius: 6px;
            transition: .3s;

            &:hover {
              transform: scale(1.1);
            }
          }

          span {
            display: block;
            font-size: 0.875rem;
            line-height: 1.7;
            font-weight: ${props => props.theme['font-w-egular']};
            color: ${props => props.theme['gray-500']};
          }

          h5 {
            font-size: 1.25rem;
            font-weight: ${props => props.theme['font-w-bold']};
            color: ${props => props.theme['gray-900']};
            line-height: 1.3;
          }
        }
      }
    }

    .about-features {
      padding: 5rem 0;

      .feature {
        display: flex;
        align-items: center;
        gap: 80px;
        margin-bottom: 5rem;

        img {
          border-radius: 10px;
          width: 520px;
          height: 420px;
        }

        .feature-text {
          width: 50%;

          h4 {
            font-size: 2.5rem;
            font-weight: ${props => props.theme['font-w-bold']};
            line-height: 1.2;
            margin-bottom: 24px;
            color: ${props => props.theme['gray-900']};
          }

          p {
            font-size: 0.875rem;
            font-weight: ${props => props.theme['font-w-egular']};
            color: ${props => props.theme['gray-500']};
            margin-bottom: 30px;
            line-height: 1.7;
          }

          button {
            outline: none;
            padding: 16px 38px;
            border: 2px solid #efefef;
            border-radius: 6px;
            font-size: 1rem;
            line-height: 1.7;
            color: ${props => props.theme['gray-900']};
            transition: all .3s ease-in-out;
            z-index: 1;
            background-color: white;

            &:hover {
              cursor: pointer;
              color: white;
              background-color: ${props => props.theme['blue-600']};
              border-color: ${props => props.theme['blue-600']};
            }
          }
        }
      }
    }
  }
`
