import styled, { css } from 'styled-components'

export const Header = styled.header<{ $menuIsOpen: boolean }>`
  background-color: ${props => props.theme['gray-100']};
  padding-bottom: 2rem;

  .container-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2.5rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.white};

    img {
      width: 80px;

      @media screen and (max-width: 990px) {
        width: 70px;
      }

      @media screen and (max-width: 390px) {
        width: 60px;
      }
    }

    nav {
      ul {
        display: flex;
        gap: 3.5rem;
      }

      li {
        padding: 0.625rem 0.3125rem;
        cursor: pointer;

        &:hover a::before {
          width: 100%;
          opacity: 1;
        }
      }

      a {
        text-decoration: none;
        color: ${props => props.theme['gray-900']};
        font-weight: ${props => props.theme['font-w-bold']};
        font-size: 1rem;
        position: relative;

        &::before {
          content: "";
          height: 2px;
          width: 0;
          background-color: ${props => props.theme.black};
          position: absolute;
          bottom: -5px;
          left: 0;
          opacity: 0;
          transition: .5s;
        }
      }

      @media screen and (max-width: 1024px) {
          ul {
            gap: 2rem;
          }
      }

      @media screen and (max-width: 990px) {
        display: none;
      }
    }

    @media screen and (max-width: 390px) {
      padding: 0 1rem;
    }
  }

  .icons {
    display: flex;
    gap: 1.2rem;
    cursor: pointer;

    & > div:last-child {
      display: none;

      @media screen and (max-width: 990px) {
        display: block;
      }
    }

    & > div:nth-child(1),  & > div:nth-child(2){
      @media screen and (max-width: 390px) {
        display: none;
      }
    }

    @media screen and (max-width: 390px) {
        gap: 0.75rem;
    }
  }

  svg {
    z-index: 1;
  }

  .header-utils {
    padding: 0.5rem 1rem;

    ul {
      display: flex;
      justify-content: end;
      gap: 2rem;

      width: 90%;
      max-width: 1320px;
      margin: 0 auto;

      @media screen and (max-width: 990px) {
        max-width: 724px;
      }

      @media screen and (max-width: 750px) {
        max-width: 540px;
      }

      li {
        list-style: none;

        a {
          color: ${props => props.theme['gray-500']};
          font-weight: ${props => props.theme['font-w-egular']};
          font-size: 0.875rem;
          text-decoration: none;

          &:hover {
            color: ${props => props.theme['blue-600']};
          }
        }
      }

      @media screen and (max-width: 750px) {
        justify-content: center;
      }
    }
  }

  .overlay {
    display: ${props => props.$menuIsOpen ? 'block' : 'none'};
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 6;
    transition: .3s;
  }
`

export const SideBar = styled.div<{ $menuIsOpen: boolean }>`
  display: none;

  @media screen and (max-width: 990px) {
    display: block;
  }

  position: fixed;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: white;
  z-index: 10;
  transition: all .3s ease-in-out;
  padding: 20px 30px 10px;

  right: -250px;
  visibility: hidden;
  opacity: 0;

  ${props => props.$menuIsOpen ? css`
    right: 0;
    visibility: visible;
    opacity: 1;
  `: ''}

  .side-bar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    img {
      width: 70px;
    }

    .close-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme['gray-100']};
      border-radius: 100%;
      width:30px;
      height: 30px;

      &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['blue-600']};
      }
    }
  }

  .list-menu {
    nav {
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          a {
            text-decoration: none;
            position: relative;
            font-size: 1rem;
            text-transform: capitalize;
            color: ${props => props.theme['gray-500']};
            font-weight: ${props => props.theme['font-w-bold']};
            padding: 0.3125rem 0;
            display: block;
            transition: all 0.3s ease-in-out;
            z-index: 1;

            &:hover {
              color: ${props => props.theme['gray-900']};
            }
          }
        }
      }
    }
  }
`