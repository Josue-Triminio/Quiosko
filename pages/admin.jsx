import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "./AdminLayout"
import Orden from '@/components/Orden';



export default function Admin() {
    const fetcher= ()=> axios('api/ordenes').then(datos=>datos.data);
    const {data,error,isLoading}=useSWR('/api/ordenes',fetcher,{refreshInterval:100})
 

    return(
        <AdminLayout pagina={'Panel De Administracion Ordenes'}>
            <h1 className=" text-4xl font-black">Panel De Administracion</h1>
            <p className=" py-10 mt-10 text-2xl text-gray-400">Administra Tus Ordenes</p>

            {data && data.length ? data.map(orden=>(
                <Orden 
                    key={orden.id}
                    orden={orden}
                
                
                />
            )) : <h1> No hay Ordenes aun </h1> }


        </AdminLayout>
    )
}
