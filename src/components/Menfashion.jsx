
import styled from "styled-components";
import { mensProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Mensfashion = () => {
  return (
    <Container>
      {mensProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Mensfashion;

const menfashion = () =>{
    return <>
        <div>Menfashion</div>
    </>
}

