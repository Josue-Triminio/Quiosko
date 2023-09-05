import useSWR from 'swr'
import AdminLayout from '../layout/AdminLayout'
import axios from 'axios'
import Orden from '../components/Orden'


export default  function Admin() {
    const fetcher=()=> axios('/api/ordenes').then(datos=>datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher,{refreshInterval:100})

    
 


 
    return(
        <AdminLayout pagina={'Panel de Administracion'}>
            <h1 className="text-4xl font-black">Panel de Administracion</h1>
            <p className="text-2xl my-10 text-gray-600">Ordenes para Preparar</p>

            {data && data.length ? data.map(orden=>(
                <Orden
                   key={orden.id} 
                   orden={orden}
                />
            )) : <h4>No hay Ordenes Para Preparar</h4> }
        </AdminLayout>
    )

}