import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <Link href="https://png.pngtree.com/png-vector/20240209/ourlarge/pngtree-cute-star-icon-vector-png-image_11733198.png">
            <Image 
            width={80}
            height={70}
            src={"https://png.pngtree.com/png-vector/20240209/ourlarge/pngtree-cute-star-icon-vector-png-image_11733198.png"}
            />
            </Link>
            <p>Copyright by Talita Gbariela Del Poso Vilalva in 18/04/2006</p>   
        </footer>
    );
}