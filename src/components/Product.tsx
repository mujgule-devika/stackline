import React from "react";
import { useAppSelector } from "../hooks/hooks";
import TagInput from "../resusableComponents/Tag/TagInput";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  Subtitle,
} from "./ProductStyles";
import { selectProductData } from "../state/products/productSlice";
//TODO: refactor to pass props
type ProductInfoProps = {
  imageUrl: string;
  title: string;
  tags: string[];
};
const Product = () => {
  const products = useAppSelector(selectProductData);
  if (!products.length) return <> Loading ...</>;
  const { title, brand, image, subtitle, tags } = products[0];

  return (
    <ProductCard>
      <ProductImage src={image} alt="image" />
      <ProductTitle>{title}</ProductTitle>
      <Subtitle>{subtitle}</Subtitle>
      <TagInput tags={tags}></TagInput>
    </ProductCard>
  );
};

export default Product;
