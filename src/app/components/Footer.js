import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.redes}>
            <ul className={styles.lista}>
                <li>
            <Link href="/">
                <Image 
            width={25}
            height={25}
            src={"https://cdn-icons-png.freepik.com/256/5968/5968967.png?ga=GA1.1.414910882.1717006491&semt=ais_hybrid"}
            />
            </Link>
            </li>
                <li>
            <Link href="/">
                <Image 
                 width={25}
                 height={25}
                 src={"https://cdn-icons-png.freepik.com/256/717/717392.png?ga=GA1.1.414910882.1717006491&semt=ais_hybrid"}
            />
            </Link>
            </li>
                <li>
            <Link href="/">
                <Image
                 width={25}
                 height={25}
                 src={"https://cdn-icons-png.freepik.com/256/12942/12942738.png?ga=GA1.1.414910882.1717006491&semt=ais_hybrid"}
            />
            </Link>
            </li>
                <li>
            <Link href="/">
                <Image 
                width={25}
                height={25}
                src={"https://cdn-icons-png.freepik.com/256/3116/3116491.png?ga=GA1.1.414910882.1717006491&semt=ais_hybrid"}
            />
            </Link>
            </li>
            </ul>
            </div>

            <div className={styles.logo}>
            <Link href="/">
            <Image 
            width={80}
            height={70}
            src={"https://png.pngtree.com/png-vector/20240209/ourlarge/pngtree-cute-star-icon-vector-png-image_11733198.png"}
            />
            </Link>
            <p>Copyright by Talita Gabriela Del Poso Vilalva in 18/04/2006</p> 
            </div>  
        </footer>
    );
}