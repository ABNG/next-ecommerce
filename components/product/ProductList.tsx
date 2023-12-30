import Product from "./Product";

const getProducts = async (categoryId?: number) => {
  const res = await fetch(
    categoryId
      ? `${process.env.NEXT_PUBLIC_BASE_URL}products/?categoryId=${categoryId}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}products`
  );

  if (!res.ok) {
    console.log(res);
    throw new Error("Something went wrong");
  }

  return res.json();
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
