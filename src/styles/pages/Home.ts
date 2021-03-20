import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: auto;

  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
img{
    width: 400px;
    height: 400px;
}
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
  `;
export default  Container;
