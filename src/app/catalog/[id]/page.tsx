"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { error } from "console";
import type { Product } from "@/lib/shopify/types";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Product() {
  const params = useParams();
  const id: number = Number(params.id);
  
  const [product, setProduct] = useState<Product | null>();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }
  }, [id]);

  if(loading) return <h3>Loading...</h3>

  if(!product) return <h3>Product not found</h3>

  return (
    <div className="w-full h-full gap-6 flex items-start justify-center">
      <div className="rounded-2xl">
        <Image
          src={product.pictureUrl}
          width={350}
          height={350}
          alt={product.name}
        />
      </div>
      <div className="w-2/4 flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <Separator />
        <h1 className="text-xl font-bold">
          R$ {(product.price / 100).toFixed(2)}
        </h1>
        <Table>
          <TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Name</TableCell>
                <TableCell className="font-medium"> {product.name} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Description</TableCell>
                <TableCell className="font-medium">
                  {product.description}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Type</TableCell>
                <TableCell className="font-medium"> {product.type} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brand</TableCell>
                <TableCell className="font-medium"> {product.brand} </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Quantity in stock</TableCell>
                <TableCell className="font-medium">
                  {product.quantityInStock}
                </TableCell>
              </TableRow>
            </TableBody>
          </TableHeader>
        </Table>
      </div>
    </div>
  );
}
