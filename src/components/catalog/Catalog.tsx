import { Button } from "@/components/ui/button";
import { Product } from "@/lib/shopify/types";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <ProductList products={products} />
    </div>
  );
}
