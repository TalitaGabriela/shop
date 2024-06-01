import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header(){
    return(
        <header className={styles.cabecalho}>
             <Link href="/">
            <Image className={styles.imagem} 
            width={80}
            height={100}
            src={"https://png.pngtree.com/png-vector/20240209/ourlarge/pngtree-cute-star-icon-vector-png-image_11733198.png"}
            />
            </Link>
            <nav>
                <ul className={styles.lista}>
                    <li>COMPRE NA ESTRELA, AQUI VOCÊ REALIZA SEUS DESEJOS!</li>
                    <li>
                    <Link href="/">
                    <Image className={styles.imagem} 
                    width={25}
                    height={25}
                    src={"https://cdn-icons-png.freepik.com/256/2838/2838895.png?ga=GA1.1.414910882.1717006491&semt=ais_hybrid"}
                    />    
                    </Link>
                    <button>ADD PRODUTO</button>
                    </li>
                </ul>        
            </nav>
        </header>
    );
}