import React, { useEffect } from "react";
import { Card } from "../../uiComponents/Card/Card";
import { fetchProduct } from "../../state/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";


const Product: React.FC = () => {
const dispatch = useAppDispatch();
const product = useAppSelector(state => state.products.items[0])

useEffect(()=>{
  dispatch(fetchProduct())
}, [product])

console.log("inside product.", product);

  return <Card>
    

  </Card>
};

export default Product;
