import { useParams } from "react-router";
import { useMealBYIDQuery } from "../features/mealApi";

const Details = () => {
  const { id } = useParams();


  const { data, isLoading, isError, error } = useMealBYIDQuery(id);


  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://lottie.host/1682b9ce-2f6a-4cb8-a4e2-b08c8a4629b4/XqfXLDjEGV.json" background="#ffffff" speed="1" loop controls autoplay ></lottie-player>
    </div>
  }


  return (

    <div className='grid bg-brown-700 grid-cols-3 gap-7 p-5 items-start'>
      {data.meals.map((meal) => {
        return <div key={meal.idMeal} className='space-y-5 shadow-2xl cursor-pointer'>
          <h1 className='text-2xl font-bold tracking-wider'
          >{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt="" />


        </div>
      })}



    </div>
  )
}
export default Details