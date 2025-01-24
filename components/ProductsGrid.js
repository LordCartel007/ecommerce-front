import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
    padding: 10px;
    gap: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1020px) {
    /* Styles for tablets */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 80px;
  }

  @media screen and (min-width: 1020px) {
    /* large screen */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 80px;
  }
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}
