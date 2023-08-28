import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  .product-price {
    height: 100px;
    width: 100px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 104px;
    left: 200px;

    span:first-child {
      color: #777;
    }

    span:last-child {
      color: #3577f0;
      font-weight: 700;
      font-size: 18px;
    }
  }
`
