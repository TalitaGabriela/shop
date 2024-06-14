import Image from "next/image";
export default function Spinner(){
    return(
        <Image
        width={50}
        height={50}
        src="/loading.svg"
        alt="Imagem carregando"
        />
    )
}