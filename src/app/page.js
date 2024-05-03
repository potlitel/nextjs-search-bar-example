"use client"; // This is a client component 👈🏽

import React, { useState } from 'react';
import Head from 'next/head';
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Head>
        <title>Search Bar Example</title>
      </Head>

      <main className="p-4">
        <h1 className="text-4xl font-semibold mb-4">Search Bar Example</h1>
        <SearchBar onChange={handleSearch} value={searchTerm} />
        {searchTerm && (
          <p className="mt-4">
            You are searching for: <strong>{searchTerm}</strong>
          </p>
        )}
      </main>
    </div>
  );
}