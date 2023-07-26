import { useRouter } from "next/router"
import { useGetGamesByIdQuery } from "@/redux/services/gamesApi"
import Image from "next/image"
import { Loading } from "@/components/Loading"
import { Header } from "@/components/Header"

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
    {data && <Image width={500} height={500} src={data.image} alt="la imagen del juego"/>}
  </div>
  )
}
