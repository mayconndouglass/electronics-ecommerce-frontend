import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.75rem 0.75rem;

  border-radius: 6px;
  box-shadow: 0 15px 20px -10px rgba(0,0,0,.04);
  transition: .5s ease-in-out;
  text-decoration: none;

  opacity: .7;
  animation: skeleton-loading 1s linear infinite alternate;

  .image-loading {
    width: 64px;
    height: calc(64px + 21px + 0.5rem);

    @media screen and (max-width: 1024px) {
      width: 50px;
      height: calc(50px + 21px + 0.5rem);
    }
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`
