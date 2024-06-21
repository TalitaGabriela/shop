'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css"
import Spinner from "./Spinner";

export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete,setListComplete] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      const [search,setSearch] = useState("")

      setListProduct(data);
      setListComplete(data);
    }

    getProduct();
  }, []);

  const ordAz = () => {
    let newList = [...listProduct].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setListProduct(newList);
  }

  const ordZa = () => {
    let newList = [...listProduct].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setListProduct(newList);

  }

  const ordBaratCaro = () => {
    let newList = [...listProduct].sort((a, b) => a.price - b.price);
    setListProduct(newList);
  }

  const ordCaroBarat = () => {
    let newList = [...listProduct].sort((a, b) => a.price - b.price);
    newList = newList.reverse();
    setListProduct(newList);
  }


  const searchText = (text) => {
    setSearch(text);
       
  }


  if (listProduct[0] == null) {
    return <Spinner />
  }
  return (
    <>
      <div className={styles.nav}>
        <input className={styles.input} type = "text" value={textSearch} placeholder="Pesquise o produto" onChange={(event) => searchText(event.target.value)}/>
        <button onClick={ordAz} className={styles.button}> A - Z</button>
        <button onClick={ordZa} className={styles.button}> Z - A</button>
        <button onClick={ordBaratCaro} className={styles.button}> Barato - Caro</button>
        <button onClick={ordCaroBarat} className={styles.button}> Caro - Barato</button>
      </div>
      
      <main className={styles.main}>
        {listProduct.map((products) =>

          <div className={styles.card} key={products.id}>
            <p className={styles.titulo}>{products.title}</p>
            <Image src={products.image}
              width={100}
              height={100} alt="product image" />
            <p className={styles.preco}>{products.price} R$</p>
            <p className={styles.descricao}>{products.description}</p>
            <p className={styles.categoria}>{products.category}</p>
            <p className={styles.avaliacao}>{products.rating.count} ESTRELAS</p>
          </div>
        )};
      </main>
    </>
  );
}