import Details from "@/pages/details/[id]"
import Image from "next/image"
import Link from "next/link"


export default function Card({id ,name, image, rating}) {
    
  return (
    <div className="card w-56 bg-base-100 shadow-xl">
    <figure><Image src={image} alt="Shoes" width={250} height={250}/></figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{rating}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href={`details/${id}`}>Buy Now</Link></button>
      </div>
    </div>
  </div>
  )
}
