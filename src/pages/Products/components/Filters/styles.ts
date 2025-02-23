import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 25%;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 1.125rem;
    font-weight: ${props => props.theme['font-w-egular']};
    color: ${props => props.theme['gray-500']};
    line-height: 20px;
    cursor: pointer;
  }

  .colors {
    ul {
      display: grid;
      grid-template-columns: repeat(7, 28px);
      justify-content: center;
    }
  }

  .prices {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;

    margin-bottom: 2rem;

    li {
      &:hover {
        cursor: pointer;
      }
    }
  }

  button {
    width: 100%;
    font-size: 1rem;
  }

  #slider {
    /* background-color: purple;
    appearance: none; */
    cursor: grab;
  }
`
export const PriceItem = styled.li<{isSelected: boolean}>`
  border: 2px solid ${({isSelected}) => isSelected ? '#777' : '#f6f7fb'}; //#f6f7fb
  background: #fff;
  padding: 0.375rem 0.75rem;//5px 13px;
  border-radius: 30px;
  min-width: 3.125rem;
  min-height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 1rem;
  color: #777;
`

export const ColorItem = styled.li<{isSelected: boolean, color: string}>`
  border: ${({ isSelected, color }) => isSelected ? `2px solid ${color}` : ''};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: ${({ color }) => color};
    border-radius: 50%;
  }
`
