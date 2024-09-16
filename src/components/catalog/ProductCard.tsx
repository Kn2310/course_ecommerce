import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/shopify/types";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  product: Product;
}

export default function ProductCard(product: Props) {
  return (
    <Card className="grow max-w-60 flex flex-col items-center justify-between">
      <CardHeader className="flex w-full">
        <CardTitle>{product.product.name}</CardTitle>
      </CardHeader>
      <Image
        src={product.product.pictureUrl}
        width={100}
        height={100}
        alt={product.product.name}
      />
      <CardContent className="flex w-full flex-col gap-2">
        <p>R$ {(product.product.price / 100).toFixed(2)}</p>
        <p>
          {product.product.brand} / {product.product.type}
        </p>
      </CardContent>
      <CardFooter className="flex w-full gap-2">
        <Button className="bg-transparent dark:bg-neutral-200 dark:hover:bg-neutral-100 shadow-none border-2 border-neutral-200 hover:bg-slate-100 hover:border-slate-100 text-neutral-900">
          Add to card
        </Button>
        <Button className="bg-transparent dark:bg-neutral-100 dark:hover:bg-neutral-100 shadow-none border-2 border-neutral-200 hover:bg-slate-100 hover:border-slate-100 text-neutral-900">
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
