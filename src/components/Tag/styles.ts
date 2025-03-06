import styled from 'styled-components'

export const Container = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  margin-bottom: 1rem;

  font-size: 0.875rem;
  font-weight: ${props => props.theme['font-w-bold']};
  color: ${props => props.color};

  @media screen and (max-width: 512px) {
    justify-content:center ;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.5rem;
    width: 1.5rem;

    background-color: ${props => props.color};
    border-radius: 50%;
  }

  svg {
    font-size: 0.75rem;
    color: white;
    position: relative;
  }
`
