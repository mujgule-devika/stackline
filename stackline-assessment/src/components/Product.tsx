import React from "react";
import { useAppSelector } from "../hooks/hooks";
import TagInput from "../uiComponents/Tag/TagInput";
import {ProductCard, ProductImage, ProductTitle, Subtitle } from "./ProductStyles";

type ProductInfoProps = {
  imageUrl: string;
  title: string;
  tags: string[];
};
const Product = () => {
  const products = useAppSelector((state) => state.products.items);
  if (!products.length) return <> Loading ...</>;
  const { title, brand, image, subtitle, tags } = products[0];

  console.log("loading?", title, brand, subtitle, tags);
  // if (!products.length) return;
  // const tags = products?.tags;

  console.log("inside product.", title, brand, subtitle, tags);
  // console.log("tags", tags);

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
