'use client'

import React from 'react'
import { Produto } from '../models/interfaces';
import useSWR from 'swr';
import Card from '../components/Card/Card';


export default function ProductsPage () {
  const fetcher = (url : string) => fetch(url).then((res) => res.json());
  const { data,error } = useSWR<Produto[]>('/api/products',fetcher)

  if (error) return <div>Failed to load</div>; 
  if (!data) return <div>No data available</div>;

  
  return ( <div>      
   {data.map((produto) => {
    return <Card title={produto.title} image={produto.image} description={produto.description} price={produto.price}></Card>
   }) }
  </div>
    
  )
}