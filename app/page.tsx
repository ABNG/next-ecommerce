import HomeCarouselSlider from "@/components/HomeCarouselSlider";
import AppLoading from "@/components/loading/AppLoading";
import ProductList from "@/components/product/ProductList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <section className="flex justify-center items-center">
        <HomeCarouselSlider />
      </section>
      <section className="m-6 grid grid-cols-fluid gap-10 place-items-center">
        <Suspense fallback={<AppLoading />}>
          <ProductList />
        </Suspense>
      </section>
    </main>
  );
}
