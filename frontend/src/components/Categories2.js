import styled from "styled-components";
import {catagories2} from '../data';
import CategoryItems from "./CategoryItems";
const Container=styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

export default function Categories() {
  return (
      <Container>  
        {catagories2.map((item)=>(
          <CategoryItems item={item}/>
          ))}
    </Container>
  );
}
