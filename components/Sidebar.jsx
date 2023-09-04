import Image from "next/image"
import { useQuiosco } from "@/hooks/useQuiosco"
import Categoria from "./Categoria"




export default function Sidebar() {
  const {categorias}=useQuiosco()
  return (
    <>
    
        <Image className=" p-4 ml-8" width={200} height={100} src='/assets/img/logo.svg' alt="logotipo de cafe"/>
        <nav className=" mt-10">
          {categorias.map(categoria => (
            <Categoria key={categoria.id} categoria={categoria} />
          ))}
        </nav>
    
    </>
  )
}
