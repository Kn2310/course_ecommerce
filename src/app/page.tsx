"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/shopify/types";
import Catalog from "@/components/catalog/Catalog";

export default function Home() {
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
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-2">
      <div className="flex flex-row w-full items-center gap-3 text-lg">
        HOME
      </div>
    </main>
  );
}
