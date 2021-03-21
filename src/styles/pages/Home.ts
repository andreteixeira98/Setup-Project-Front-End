import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: auto;

  margin-bottom: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
p{
    font-size: 4rem;
    margin-top: 5rem;
}
ul{
    display: flex;
    flex-direction: column;
    justify-content:space-between;



    list-style-type: disc;

}
ul > li{
    font-size: 2rem;
    margin-bottom:1rem;
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
