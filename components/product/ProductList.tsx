import { api } from "@/lib/axios_interceptor";
import React from "react";
import Product from "./Product";

const getProducts = async (categoryId?: number) => {
  try {
    const response = await api.get(
      categoryId ? `products/?categoryId=${categoryId}` : "products"
    );
    return response.data;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.toString());
  }
};

type Props = {
  readonly categoryId?: number;
};

const ProductList = async ({ categoryId }: Props) => {
  const data = await getProducts(categoryId);
  return (
    <>
      {data.length == 0 ? (
        <h1>No Product Available</h1>
      ) : (
        data.map(
          (product: any) =>
            (product.images[0] as string).startsWith("https") && (
              <Product product={product} key={product.id} />
            )
        )
      )}
    </>
  );
};

export default ProductList;
