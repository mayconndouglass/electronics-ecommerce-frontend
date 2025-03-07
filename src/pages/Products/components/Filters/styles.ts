import { css, styled } from 'styled-components'

export const Container = styled.div<{ $menuIsOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 25%;
  height: 100vh;

  .side-bar {
    display: none;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .close-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;

    background-color: ${props => props.theme['gray-100']};
    border-radius: 100%;
    width: 1.875rem;
    height: 1.875rem;

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme['blue-600']};
    }
  }

  @media screen and (max-width: 1150px) {
    width: 20%;
  }

  @media screen and (max-width: 1126px) {
    .reset-filters-button button {
      line-height: 1;
    }
  }

  @media screen and (max-width: 990px) {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 40%;
    background-color: white;
    z-index: 10;
    transition: all .3s ease-in-out;
    padding: 1.25rem 2rem;

    left: -40%;//-250px;
    visibility: hidden;
    opacity: 0;

    ${props => props.$menuIsOpen ? css`
      left: 0;
      visibility: visible;
      opacity: 1;
    `: ''}

    max-height: 100vh;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #aaa;
      border-radius: 4px;
    }

    .side-bar{
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    width: 60%;
    left: -60%

    ${props => props.$menuIsOpen ? css`
      left: 0;
      visibility: visible;
      opacity: 1;
    `: ''}
  }

  @media screen and (max-width: 400px) {
    width: 80%;
    left: -80%

    ${props => props.$menuIsOpen ? css`
      left: 0;
      visibility: visible;
      opacity: 1;
    `: ''}
  }

  @media screen and (max-width: 300px) {
    width: 100%;
    left: -100%

    ${props => props.$menuIsOpen ? css`
      left: 0;
      visibility: visible;
      opacity: 1;
    `: ''}
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.625rem;

    font-size: 1.125rem;
    font-weight: ${props => props.theme['font-w-egular']};
    color: ${props => props.theme['gray-500']};
    line-height: 1.25rem;
    cursor: pointer;
  }

  .colors {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(1.75rem, 1fr));
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
  padding: 0.25rem;
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


export const overlay = styled.div<{ $menuIsOpen: boolean }>`
  display: ${props => props.$menuIsOpen ? 'block' : 'none'};
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0,.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  transition: .3s;
`
