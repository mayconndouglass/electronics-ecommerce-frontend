import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: white;
  border: 1px solid #f1f1f1;
  padding: 50px 40px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 6px;
  position: relative;
  transition: all .3s ease-in-out;

  max-width: 224px;

  .img {
    margin-bottom: 20px;
  }

  h6 {
    color: #292930;
    font-size: 16px;
    line-height: 26px;
    font-weight: 700;
    margin-bottom: 0;
  }

  &::before {
    content: "";
    height: 100%;
    width: 90%;
    border: 1px solid #f1f1f1;
    border-radius: 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    transition: all .3s ease-in-out;
  }

  &:hover {
    box-shadow:0 16px 32px 0 rgba(0, 0, 0, 0.04);
  }

  &:hover::before {
    visibility: visible;
    opacity: 1;
    bottom: -12px;
  }
`
