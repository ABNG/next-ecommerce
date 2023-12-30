import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
type Props = {
  product: any;
};

const Product = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} className="w-full">
      <Card className="group transition-shadow hover:shadow-xl cursor-pointer">
        <CardContent className="p-0">
          <div className="w-full h-48 relative overflow-hidden rounded-t-lg">
            <Image
              className="transition-transform group-hover:scale-125"
              src={product.images[0]}
              alt="offer"
              fill
              sizes="(min-width: 2760px) calc(11.25vw - 72px), (min-width: 2480px) calc(12.69vw - 76px), (min-width: 2200px) calc(14.23vw - 74px), (min-width: 1920px) calc(16.92vw - 86px), (min-width: 1640px) calc(20vw - 88px), (min-width: 1360px) calc(25vw - 100px), (min-width: 1280px) calc(33.33vw - 120px), (min-width: 1140px) calc(25vw - 44px), (min-width: 860px) calc(33.46vw - 46px), (min-width: 580px) calc(50vw - 46px), calc(100vw - 50px)"
            />
          </div>
          <div className="p-2">
            <div className="flex gap-1">
              <StarFilledIcon className="w-5 h-5" color="#f5e852" />
              <p className="text-gray-400">0</p>
            </div>
            <h1 className="font-semibold">{product.title}</h1>
            <div className="flex justify-between items-center">
              <p className="text-gray-300 text-sm line-clamp-2">
                {product.description}
              </p>
              <p className="font-semibold flex-none">SAR {product.price}</p>
            </div>
            <div className="flex justify-center mt-4">
              <Button className="rounded-full">
                Add To Cart <ShoppingCartIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Product;
