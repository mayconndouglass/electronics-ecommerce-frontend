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
      font-weight: ${props => props.theme['font-w-bold']};
      color: ${props => props.theme['gray-900']};
    }

    p {
      font-size: 1rem;
      font-weight: ${props => props.theme['font-w-egular']};
      color: ${props => props.theme['gray-500']};
      margin: 0 0 30px;
    }
  }
`
