import { Header } from '../components/Header'
import { useGetGamesQuery } from '@/redux/services/gamesApi'
import Card from '../components/Card'
import Paginate from "../components/Paginado";
import { useState } from 'react';
import { Loading } from '@/components/Loading';

export default function Home() {
  const {data, error, isLoading, isFetching} = useGetGamesQuery()
  const [cardPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  var currentCards = data?.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

//  const juegos = data?.slice(0, 10)

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
    <div>
      <Header/>
    <div className='w-scren h-screen bg-teal-700'>
    <div className='grid grid-cols-5 gap-4 p-4 bg-teal-700'>
    {currentCards && currentCards.map((g) => (<Card
              key={g.id}
              id ={g.id}
              name={g.name}              
              image={g.image}
              rating={g.rating}
              
            />))}
    </div>
    <Paginate
    cardPerPage={cardPerPage}
    totalCards={data.length}
    paginate={paginate}
    currentPage={currentPage}
    />
    </div>
    </div>
  )
}
