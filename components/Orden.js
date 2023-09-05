import Image from "next/image";
import axios from "axios";
import {  toast } from "react-toastify";
import { formatearDinero } from "../helpers";

export default function Orden({orden}) {
    const {id,nombre,total,pedido,fecha}=orden;

    const completarOrden= async()=>{
        try {
            await axios.post(`/api/ordenes/${id}`)

            toast.success('Orden Completada')
            
        } catch (error) {
            
        }
    }
    
  return (
    <div className=" border p-10 space-y-5">
        <h1 className="text-2xl font-bold text-amber-500">Orden:{id}</h1>
        <p className="text-xl font-bold my-10 text-gray-600">Cliente: {nombre}</p>
        
        <div>
            {pedido.map(platillo=>(
                <div key={platillo.id} className=" py-3 flex border-b last-of-type:border-0 items-center">
                    <div className=" w-32 ">
                        <Image 
                            className="rounded-full"
                            width={300}
                            height={300}
                            src={`/assets/img/${platillo.imagen}.jpg`}
                            alt={`imagen de platillo: ${platillo.nombre}`}
                        />
                    </div>
                    <div className=" p-5 space-y-2">
                        <h4 className=" text-xl font-bold text-amber-500">{platillo.nombre}</h4>
                        <p className="  font-bold text-2xl">Cantidad: {platillo.cantidad}</p>
                        <p className=" mt-5 font-black text-2xl text-amber-500">
                            Total: {formatearDinero(total)}
                        </p>
                    </div>

                    <div className=" md:flex md:items-center md:justify-center my-10  w-full">

                        <button
                            className=" bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                            type="button"
                            onClick={completarOrden}
                        >

                            Completar Orden
                        </button>

                    </div>
                   

                </div>
            ))}
        </div>

        

    </div>
  )
}
