import Image from "next/image"
import axios from "axios"
import { formatearDinero } from "@/helpers"
import { toast } from "react-toastify"


export default function Orden({orden}) {
    const {id,nombre,fecha,total,pedido }=orden

    const completarOrden= async()=>{
        try {
            await axios.post(`/api/ordenes/${id}`)

           toast.success('Orden Lista')
           
        } catch (error) {
            toast.error('Orden rechazada')
            
        }
    }

  return (
    <div className="border p-10 space-y-5">
        <h3 className=" text-amber-500 text-2xl font-bold">Orden: #{id}</h3>
        <p className=" texlg font-bold text-gray-600">Cliente: {nombre}</p>

        <div>

            {pedido.map(platillo=>(
                <div key={platillo.id} className=" py-3 flex border-b last-of-type:border-0 items-center">
                    <div className=" w-32">
                         <Image width={100} height={200} src={`/assets/img/${platillo.imagen}.jpg`}  alt={`imagen platillo${platillo.nombre}`}/>
                    </div>

                    <div className=" p-5 space-y-2">
                        <h4 className=" text-xl font-bold text-amber-500">{platillo.nombre}</h4>
                        <p className=" text-lg font-bold">Cantidad: {platillo.cantidad}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className=" md:flex md:items-center md:justify-between my-10">
                <p className=" mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p>
                <button
                type="button"
                 className=" bg-indigo-600 hover:bg-indigo-800 text-white uppercase mt-5 md:mt-0 py-3 px-10 rounded-md font-bold  "
                 onClick={completarOrden}
                 >completar orden</button>
        </div>
    
    </div>
  )
}
