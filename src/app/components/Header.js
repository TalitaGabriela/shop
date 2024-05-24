import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cabecalho}>
            <Image className={styles.imagem} 
            width={100}
            height={110}
            src={"https://cdn-icons-png.flaticon.com/128/2919/2919921.png"}
            />
            <nav>
                <ul className={styles.lista}>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                </ul>    
            </nav>
        </header>
    );
}