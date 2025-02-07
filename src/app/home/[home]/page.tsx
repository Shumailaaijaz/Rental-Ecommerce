"use client"
import Hero from '@/components/Hero';
import React from 'react';
import Filter from '@/components/Filter';
import About from '@/components/About';




const page = () => {
  return (
    <div>
     
      <Hero/>
      <Filter/>
      <About/>
      
    </div>
  );
}

export default page;