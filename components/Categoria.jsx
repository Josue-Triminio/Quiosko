import { useQuiosco } from "@/hooks/useQuiosco";
import Image from "next/image";


export default function Categoria({categoria}) {
    const {nombre,icono,id}=categoria; 
    const{handleClickCategoria,categoriaActual}=useQuiosco()
  return (
    <div className= {`${categoriaActual?.id===id ? 'bg-amber-400' : ''} flex items-center gap-3 p-5 w-full border hover:bg-amber-400 transition-all`}>
        
         <Image width={70} height={70} src={`/assets/img/icono_${icono}.svg`} alt="icono" className=""/>
        
         <button
          type="button"
          className=" text-2xl font-bold hover:cursor-pointer w-full h-5" 
           onClick={()=>handleClickCategoria(id)} 
         >{nombre}</button>

    </div>
  )
}
