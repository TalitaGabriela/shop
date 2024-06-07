'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css"

export default function Main() {

    const [listProduct, setListProduct] = useState([]);

    useEffect( ()=> {
      const getProduct = async ()=>{
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();

        setListProduct(data);
      }

      getProduct();
    }, []);

    const ordAz = () => {
      let newList= [...listProduct].sort( (a,b) =>
        a.title.localeCompare(b.title)
      );
      setListProduct(newList);
    }

    const ordZa = () => {
      let newList= [...listProduct].sort( (a,b) =>
        b.title.localeCompare(a.title)
      );
      setListProduct(newList);
    }

    const  ordBaratCaro = () => {
      let newList= [...listProduct].sort( (a,b) =>
        a.price.toString().localeCompare(b.price.toString(),undefined, {numeric:true} )
      );
      setListProduct(newList);
    }

    const ordCaroBarat = () => {
      let newList= [...listProduct].sort( (a,b) =>
        b.price.toString().localeCompare(a.price.toString(),undefined, {numeric:true})
      );
      setListProduct(newList);
    }

  return (
    <>

    <div>
      <button onClick = {ordAz}> A - Z</button>
      <button onClick = {ordZa}> Z - A</button>
      <br/>
      <button onClick = {ordBaratCaro}> Barato - Caro</button>
      <button onClick = {ordCaroBarat}> Caro - Barato</button>
    </div>
    <main className={styles.main}>
    {listProduct.map((products) =>

       <div className={styles.card} key={products.id}>
          <p>{products.title}</p>
          <p>{products.price} R$</p>
          <p>{products.description}</p>
          <p>{products.category}</p>
          <p>{products.rating.count}</p>
          <Image src={products.image} 
          width={100} 
          height={100} alt="product image"/>
       </div>
    )};
       </main> 
       </>
  );
}