import styled from "styled-components"





export const Container = styled.div`

width: 70%;
margin: 0 auto;

ul{
  list-style: none;
  
}

li{
  background: white;
  margin-bottom: 0.5rem;
  padding: 1.5rem;
  border-radius: 0.3rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
   
 

  h2{
    padding-bottom: 0.4rem;
    color: #363f5f;
    font-size: 2rem;
  }
  
  p{
    padding-bottom: 1rem;
    color: #969cb3;
  }

  a{
    text-decoration: none;
    color:var(--green);
    border-radius: 0.3rem;
    
  }

  button{
    width: 7rem;
    padding: 0.5rem 0rem 0.5rem 0rem;
    background: #f0f2f5;
    border: none;

  }



}
`