import styled from 'styled-components'

export const Header = styled.header`
  background-color: #f9f3f0;
  padding-bottom: 2rem;
/*
  .scrolled {
    position: sticky;
    width: 1320px;
    top: 10px
  } */
  .container-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 80px;
    padding: 0 2.5rem;
    border-radius: 0.5rem;
    background-color: white;
    z-index: 3;

    position: sticky;
    top: 20px;

    nav {
      ul {
        display: flex;
        gap: 3.5rem;
      }

      li {
        padding: 10px 5px;
        cursor: pointer;

        &:hover a::before {
          width: 100%;
          opacity: 1;
        }
      }

      a {
        text-decoration: none;
        color: #292930;
        font-weight: 700;
        font-size: 15px;
        position: relative;

        &::before {
          content: "";
          height: 2px;
          width: 0;
          background-color: black;
          position: absolute;
          bottom: -5px;
          left: 0;
          opacity: 0;
          transition: .5s;
        }
      }
    }
  }

  .icons {
    display: flex;
    gap: 1.2rem;
    cursor: pointer;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      color: #292930;
      font-size: 1.5rem;
      font-weight: 400;

      position: relative;
      transition: 0.3s;

      &::before {
        content: "";
        height: 45px;
        width: 45px;

        background-color: #ff497c;
        border-radius: 50%;

        transform: scale(0);
        position: absolute;
        z-index: -1;
        transition: 0.3s;
      }

      &:hover {
        color: white;

        &::before {
          transform: scale(1);
          z-index: 0;
        }
      }
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

      li {
        list-style: none;

        a {
          color: #777;
          font-family: 'DM sans';
          font-weight: 400;
          font-size: 0.875rem;
          text-decoration: none;

          &:hover {
            color: #0d6efd;
          }
        }
      }
    }
  }




`
