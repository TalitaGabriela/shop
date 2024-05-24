import styles from "./footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={styles.rodape}>
            <Link href="https://www.flaticon.com/br/">
            <Image 
            width={120}
            height={40}
            src={"https://cdn-icons-png.flaticon.com/128/4146/4146950.png"}
            />
            </Link>
            
        </footer>
    );
}