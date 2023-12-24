import AppLoading from "@/components/loading/AppLoading";
import ProductList from "@/components/product/ProductList";
import React, { Suspense } from "react";

type Props = {
  params: { id: number };
};

const Category = ({ params: { id } }: Props) => {
  return (
    <main>
      <section className="m-6 grid grid-cols-fluid gap-10 place-items-center">
        <ProductList categoryId={id} />
      </section>
    </main>
  );
};

export default Category;
