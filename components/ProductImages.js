import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  max-width: 100%;
  max-height: 300%;
  border-radius: 5px;
  height: 100%;
  width: auto;
  object-fit: cover;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 500%;
  height: 140px;
  width: auto;
  margin-top: 10px;
  object-fit: cover; /* Ensures the image covers the area without stretching */
  @media screen and (min-width: 768px) {
    height: 300px;
  }
`;

const ImageButtons = styled.div`
  display: flex;
  flex-grow: 0;
  margin-top: 10px;
  gap: 10px;
  justify-content: center;
  height: 60px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;

  ${(props) =>
    props.$active
      ? "border-color: #ccc;"
      : "border-color: transparent; opacity: 0.7; "}
  height: 30px;
  width: auto;
  padding: 2px;

  cursor: pointer;
  border-radius: 5px;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>

      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            $active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
