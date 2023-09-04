import Image from "next/image"
import { useQuiosco } from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers"
import { useEffect, useState } from "react"


export default function ModalProducto() {
    const {producto,handleSetModal,handleAgregarPedido,pedido}=useQuiosco()
    const{nombre,imagen,precio}=producto
    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
      
        if(pedido.some((pedidoState)=>pedidoState.id===producto.id)) {
            const productoEdicion=pedido.find((pedidoState)=>pedidoState.id===producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
     
    }, [producto,pedido])
    

    
  return (
    <div className=" md:flex gap-10">

        <div className=" md:w-4/4">
            <Image width={400} height={400} alt={`imagen ${nombre}`} src={`/assets/img/${imagen}.jpg`} />
        </div>
      
        <div className=" md:w-2/3">
            <div className=" flex justify-end p-3">
                <button onClick={handleSetModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <h1 className=" w-full text-4xl font-bold  mt-5">{nombre}</h1>
            <p className=" text-5xl mt-5 font-black text-amber-500">{formatearDinero(precio)}</p>
            <div className=" flex gap-5 mt-6">
                <button type="button" onClick={()=>{  if (cantidad <= 1)return; setCantidad(cantidad -1);}
                    }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
                    <p className=" text-3xl">{cantidad}</p>
                <button type="button" onClick={()=>{ if(cantidad >= 8) return;   setCantidad(cantidad +1)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </div>
            <button 
                    type="button"
                     className=" bg-indigo-600 text-white px-5 hover:bg-indigo-800 py-2 mt-5 rounded  uppercase"
                     onClick={()=>handleAgregarPedido({...producto,cantidad})}
                     >
                     {edicion ? 'Guardar Cambios' : 'Agregar al Pedido'}
            </button>
        </div>
   

    </div>
  )
}
