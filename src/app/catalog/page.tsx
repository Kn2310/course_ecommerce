"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/shopify/types";
import Catalog from "@/components/catalog/Catalog";
import axios from "axios";

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct() {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 101,
        name: "product" + (prevState.length + 1),
        description: "some description",
        price: prevState.length * 100 + 100,
        pictureUrl: "http://picsum.photos/200",
        type: "",
        brand: "some brand",
        quantityInStock: 20,
      },
    ]);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-2">
      <div className="flex flex-row w-full items-center gap-3 text-lg">
        <Catalog products={products} addProduct={addProduct} />
      </div>
    </main>
  );
}
