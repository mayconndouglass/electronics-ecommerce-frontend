import { styled } from 'styled-components'

export const Container = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  padding-bottom: 5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    color: #777777;

    li:first-child, li:last-child {
      display: flex;
    }

    .active {
      border-color: ${props => props.theme['blue-400']};
    }

    .disabled {
      pointer-events: none;
      opacity: 0.5;
      cursor: not-allowed;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 35px;
      height: 35px;
      background: ${props => props.theme['slate-50']};
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      line-height: 34px;
      border-radius: 8px;
      font-size: 1rem;

      transition: ease 0.3s;
      border: 2px solid ${props => props.theme['slate-50']};

      color: #777777;

      svg {
        width: 1.25rem;
      }

      &:hover {
        transition: ease 0.3s;
        border-color: ${props => props.theme['blue-400']};
      }
    }
  }
`
