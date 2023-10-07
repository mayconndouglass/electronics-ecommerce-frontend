import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    max-height: 60px;
    width: 45px;
    object-fit: contain;
  }

  .info {
    h6 {
      line-height: 1.7;
      font-size: 1rem;
      font-weight: 700;
      color: #292930;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: #777777;
      margin: 0 0 30px;
    }
  }
`
