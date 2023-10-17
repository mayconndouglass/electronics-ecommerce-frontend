import styled from 'styled-components'

export const Container = styled.span<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 10px;
  /* width: 500px; */

  margin-bottom: 1rem;

  font-size: 14px;
  font-weight: ${props => props.theme['font-w-bold']};
  color: ${props => props.color};

  @media screen and (max-width: 512px) {
    justify-content:center ;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 24px;
    width: 24px;

    background-color: ${props => props.color};
    border-radius: 50%;
  }

  svg {
    font-size: 12px;
    color: white;
    position: relative;
  }
`
