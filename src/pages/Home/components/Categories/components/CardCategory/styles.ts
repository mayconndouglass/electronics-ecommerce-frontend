import styled from 'styled-components'

export const Container = styled.div`
  a {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    max-width: 159px;
    padding: 1.75rem 0.75rem;

    border-radius: 6px;
    box-shadow: 0 15px 20px -10px rgba(0,0,0,.04);
    transition: .5s ease-in-out;
    z-index: 1;
    color: #777;
    text-decoration: none;

    &::before {
      content: "";
      height: 100%;
      width: 100%;
      background-color: white;
      border: 1px solid #f0f0f0;
      border-radius: 4px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
      transition: transform .5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    h4 {
      font-size: 16px;
      font-weight: 500;
      color: #292930;
    }

    img {
      max-width: 64px;
      min-width: 41px;
    }

    &:hover::before {
      transform: scale(1.1);
      transition: transform .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`
