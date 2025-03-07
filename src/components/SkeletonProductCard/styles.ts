import { css, styled } from 'styled-components'

export const Container = styled.div<{ $cardStyling: 'normal' | 'circular' }>`
  ${props => props.$cardStyling === 'circular' ? css`
    display: flex;
    flex-direction: column;
    align-items: center;
  ` : ''}
  padding: 2rem 1rem; //TODO: provavelmente vou ter que tirar isso na page products

  .skeleton {
    opacity: .7;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  .image-loading {
    width: 100%;
    height: 300px; //200px;
    border-radius: ${props => props.$cardStyling === 'normal' ? '6px' : '50%'};
    margin-bottom: 0.7rem;

    @media screen and (max-width: 1249px) {
      width: ${props => props.$cardStyling === 'circular' ? '250px' : '100%' };
      height: ${props => props.$cardStyling === 'circular' ? '250px' : '300px' };
    }

    @media screen and (max-width: 750px) {
      width: ${props => props.$cardStyling === 'circular' ? '200px' : '100%' };
      height: ${props => props.$cardStyling === 'circular' ? '200px' : '270px' };
    }

    @media screen and (max-width: 750px) {
      margin-top: ${props => props.$cardStyling === 'circular' ? '2rem' : '' };
    }
  }

  .title-loading {
    width: 75%;
    height: 1rem;
    border-radius: 6px;
    margin-bottom: .5rem;
  }

  .price-loading {
    width: 30%;
    height: 1rem;
    border-radius: 6px;
    margin-bottom: ${props => props.$cardStyling === 'normal' ? '2rem' : '1.25rem'};
  }

  .actions-container {
    width: 60%;
    height: 46.6px;
    border-radius: 6px;
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
