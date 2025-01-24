import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 10px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}
