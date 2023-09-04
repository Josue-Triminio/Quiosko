import Layout from "@/layout/Layout"
import { useQuiosco } from "@/hooks/useQuiosco"
import ResumenProducto from "@/components/ResumenProducto"



export default function Resumen() {
    const {pedido}=useQuiosco()
  return (
    <Layout pagina={'Resumen'}>
        <h1 className=" text-4xl font-black">Tu Pedido</h1>
        <p className=" py-10 mt-10 text-2xl">Revisa tu Pedido</p>

        {pedido.length===0 ? (
            <p className=" text-center text-2xl"> No hay Pedidos aun  </p>
        ):(
            pedido.map(producto=>(
                <ResumenProducto 
                    key={pedido.id}
                    producto={producto}
                
                
                />
            ))
        )}


    </Layout>
  )
}
