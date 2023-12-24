import HomeCarouselSlider from "@/components/HomeCarouselSlider";
import AppLoading from "@/components/loading/AppLoading";
import Product from "@/components/product/Product";
import ProductList from "@/components/product/ProductList";
import { api } from "@/lib/axios_interceptor";
import { Suspense } from "react";

const getCategories = async () => {
  try {
    const response = await api.get("categories");

    return response.data;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.toString());
  }
};

export default async function Home() {
  const promise = getCategories();
  return (
    <main>
      <section className="flex justify-center items-center">
        <Suspense fallback={<AppLoading />}>
          <HomeCarouselSlider categories={promise} />
        </Suspense>
      </section>
      <section className="m-6 grid grid-cols-fluid gap-10 place-items-center">
        <Suspense fallback={<AppLoading />}>
          <ProductList />
        </Suspense>
      </section>
    </main>
  );
}
