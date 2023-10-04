import { styled } from 'styled-components'

export const Container = styled.div<{ textStyle: string }>`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;

  img {
    transition: .5s;
    width: 100%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;

    text-decoration: none;

    transition: .5s;
  }

  &:hover {
    cursor: pointer;
    border-radius: 6px;

    img {
      transform: scale(1.1);
      transition: .5s;
    }

    .content {
      span {
        color: white;
      }
    }
  }

  .suport {
    width: 50%;
  }

  .content {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    h3 {
      line-height: 1;
      font-size: 2.5rem;
      color: white;
    }

    span {
      font-size: 1rem;
      line-height: 1.3;
      position: relative;
      color: rgba(255,255,255,.4);
      transition: all .3s ease-in-out;
      order: ${props => props.textStyle === 'left' ? '-1' : '1'};
    }

    order: ${props => props.textStyle === 'left' ? '-1' : '1'};
    margin-left: ${props => props.textStyle === 'left' ? '3.125rem' : '0'};
  }
`
