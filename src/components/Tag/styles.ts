import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 500px;

  margin-bottom: 1rem;

  font-size: 14px;
  font-weight: 700;
  color: #ff497c;

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 24px;
    width: 24px;

    background-color: #ff497c;
    border-radius: 50%;
  }

  svg {
    font-size: 12px;
    color: white;
    position: relative;
  }
`
