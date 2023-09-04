import { useEffect,useCallback } from "react";
import { useQuiosco } from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";
import Layout from "@/layout/Layout"



export default function Total() {
  const {pedido,nombre,setNombre,colocarOrden,total}=useQuiosco();
  const comprobarPedido=useCallback(()=>{
    return pedido.length===0 || nombre === '' || nombre.length < 3;
  },[pedido,nombre])

  useEffect(() => {
    comprobarPedido()
  }, [pedido,comprobarPedido])
  




  return (
    <Layout pagina={'Total y Confirmar Pedido'}>
        <h1 className=" text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className=" py-10 mt-10 text-2xl">Confirma tu Pedido</p>
        <form onSubmit={colocarOrden} >
          <div>
            <label htmlFor="nombre" className=" block uppercase text-slate-800 font-bold text-xl">
              Nombre
            </label>
              <input value={nombre} onChange={e=>setNombre(e.target.value)} type="text" id="nombre" className=" bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md" />
          </div>
          <div className=" mt-10">
              <p className=" text-2xl">Total  Pagar {''} <span className=" font-bold">{formatearDinero(total)}</span></p>
          </div>
          <div className=" mt-8">
            <input 
              type="submit" 
              disabled={comprobarPedido()}
               value={'confirmar pedido'}
                className={`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white cursor-pointer`}/>
             
          </div>

        </form>


    </Layout>
  )
}
 