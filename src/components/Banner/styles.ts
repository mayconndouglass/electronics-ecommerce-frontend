import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('../assets/images/banner-loja.avif');
  padding: 1.25rem 0 1.125rem;

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: ${props => props.theme['font-w-bold']};
    color: ${props => props.theme.white};

    a {
      color: ${props => props.theme.white};
      transition: all .3s ease-in-out;

      &:hover {
        color: ${props => props.theme['pink-600']};
      }
    }

    @media screen and (max-width: 350px) {
      font-size: 0.875rem;
      font-weight: 600;
    }
  }
`
