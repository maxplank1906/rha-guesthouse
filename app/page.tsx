"use client";

import React from 'react';
import Home from '../src/pages/Home';

export default function Page() {
  return (
    <main>
      <Home onPageChange={() => {}} onSelectRoom={() => {}} />
    </main>
  );
}
