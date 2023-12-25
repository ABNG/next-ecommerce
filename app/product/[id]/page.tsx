import Quantity from "@/components/Quantity";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios_interceptor";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const response = await api.get("products");

  const ids: [{ id: string }] = response.data.map((e: any) => {
    return { id: e.id.toString() };
  });
  return ids;
}

const getProductDetail = async (id: number) => {
  try {
    const response = await api.get(`products/${id}`);
    return response.data;
  } catch (e: any) {
    console.log(e);
    throw new Error(e.toString());
  }
};

type Props = {
  params: { id: number };
};

const ProductDetail = async ({ params: { id } }: Props) => {
  const product = await getProductDetail(id);

  return (
    <div className="flex flex-col items-center sm:justify-center sm:flex-row mt-16 mx-4 sm:mx-8 xl:mx-0 overflow-hidden">
      <div className="w-full h-96 relative sm:w-1/3 sm:h-64 overflow-hidden animate__animated animate__bounceIn">
        <Image
          className="rounded-xl object-center"
          src={product.images[0]}
          fill
          alt="image"
          priority
          sizes="(min-width: 1280px) calc(33.31vw - 74px), (min-width: 640px) calc(33.39vw - 22px), calc(100vw - 32px)"
        />
      </div>

      <div className="w-96 p-4 sm:p-8">
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h1 className="font-semibold mr-2">{product.title}</h1>
            <StarFilledIcon className="w-5 h-5" color="#f5e852" />
            <p className="text-gray-400">0</p>
          </div>
          <p className="text-gray-300 text-sm">{product.description}</p>
          <div className="bg-containerColor my-4 p-2 pl-6 rounded-lg text-gray-600 text-sm">
            This product is not returned or replaced
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="flex-none font-semibold text-xl">
              {product.price} <span className="font-medium text-xs">SAR</span>
            </p>

            <Quantity />
          </div>
          <div className="flex justify-center mt-8">
            <Button className="rounded-full w-1/2">
              Add To Cart <ShoppingCartIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
