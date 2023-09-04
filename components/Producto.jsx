import { formatearDinero } from "@/helpers"
import Image from "next/image"
import { useQuiosco } from "@/hooks/useQuiosco"

export default function Producto({producto}) {
    const {handleSetModal,handleSetProducto }=useQuiosco()

    const {imagen,precio,nombre}=producto
  return (
    <div className=" border p-3">
        <Image src={`/assets/img/${imagen}.jpg`} width={400} height={500} alt={`imagen platillo ${nombre}`} />
        <h3 className=" text-2xl font-bold">{nombre}</h3>
        <p className=" mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
        <button type="button" className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full uppercase p-3 font-bold"
            onClick={()=>{
                handleSetModal()
                handleSetProducto(producto)
            }}
        
        >
            Agregar
        </button>
        
    </div>
  )
}
