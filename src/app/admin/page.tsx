"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [state, setState] = useState(0);

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-1">
      <div className="flex flex-col w-full items-center gap-3 text-lg text-teal-700">
        <h1>Admin</h1>
      </div>
    </main>
  );
}
