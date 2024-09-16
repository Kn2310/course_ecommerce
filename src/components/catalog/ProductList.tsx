import { Product } from "@/lib/shopify/types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <div className="flex flex-row justify-center gap-5 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
