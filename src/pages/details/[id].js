import { useRouter } from "next/router"
import { useGetGamesByIdQuery } from "@/redux/services/gamesApi"
import Image from "next/image"
import { Loading } from "@/components/Loading"
import { Header } from "@/components/Header"
import Link from "next/link"

export default function Details() {
const router = useRouter()
const {id} = router.query
const {data, error, isLoading, isFetching} = useGetGamesByIdQuery({id})
console.log(id)
console.log(data)

if(error){
    return <p>error</p>
  }
  if(isFetching || isLoading){
    return <>
    <Header/>
    <Loading/>
    </>
  }

  return (
    <div >
      <Header/>
      <div className="flex ">
      <Image className="p-5" width={800} height={800} src={data.image} alt="la imagen del juego"/>
      <div className="p-5">
      <p className="text-4xl text-white mb-2">{data.name}</p>
      <p className="text-white">{data.description}</p>
      </div>
      </div>
      <div className="flex justify-around">
        <button className="btn btn-secundary"><Link href="/home">Volver al inicio</Link></button>
        <div>
        <button className="btn btn-secundary mr-8">Agregar al carrito</button>
        <button className="btn btn-primary" >Comprar</button>
        </div>
      </div>
  </div>
  )
}
