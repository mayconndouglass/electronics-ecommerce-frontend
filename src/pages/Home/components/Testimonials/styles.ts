import styled from 'styled-components'

export const Container = styled.section`
  background-color: #F9F3F0;
  padding: 5rem 0;

  h2 {
    margin-bottom: 30px;
  }

  .testimonials-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    & > div:nth-child(2) {
      margin-top: 30px;
    }
  }
`
