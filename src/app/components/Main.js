import Image from "next/image";
import styles from "./main.module.css"

export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json();

  return (
    <main className={styles.main}>
      {data.map((products) =>

       <div className={styles.card} key={products.id}>
          <p>{products.title}</p>
          <Image src={products.image} 
          width={100} 
          height={100} alt="product image"/>
       </div>
    )};
       </main>
  );
}