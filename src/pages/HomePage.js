import React from 'react'
import { useGetCategoryFoodQuery, useGetRandomFoodQuery } from '../features/mealApi'
import { useNavigate } from 'react-router';





const HomePage = () => {

  const { data, isError, error, isLoading } = useGetCategoryFoodQuery();
  const { data: dat, isLoading: load, isError: isE, error: err } = useGetRandomFoodQuery();



  const nav = useNavigate()


  if (isLoading || load) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>

      <lottie-player src="https://lottie.host/1682b9ce-2f6a-4cb8-a4e2-b08c8a4629b4/XqfXLDjEGV.json" background="#ffffff" speed="1" loop controls autoplay ></lottie-player>
    </div>
  }


  console.log(data);


  return (
    <div>
      <div className='flex py-9 bg-brown-200'>
        <div>
          <img src="https://themealdb.com/images/meal-icon.png" alt="" />
        </div>

        <div className='  px-20'>
          <h1 className='font-bold text-4xl'>WELCOME TO THE MEALDB</h1>
          <p className='text-yellow-500'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the wrold.</p>
          <p className='text-yellow-500'> We also offer a free Json API  for anyone wanting to use it, with additional features for subscribers.</p>
        </div>

        <div>
          <img src="https://themealdb.com/images/meal-icon.png" alt="" />
        </div>

      </div>


      <div className=' bg-brown-300'>
        <h1 className='text-center  text-3xl font-bold italic underline text-red-700'> Meal categories</h1>
      </div>

      <div>
        <img src="https://themealdb.com/images/separator.jpg" alt="" />
      </div>


      <div className=' grid bg-brown-300 grid-cols-3 gap-7 p-5 items-start  msm:grid-cols-1 mmd:grid-cols-2'>
        {data.categories.map((meal) => {
          return <div
            onClick={() => nav(`/meals/detail/${meal.strCategory}`)}
            key={meal.idCategory} className='space-y-5 shadow-2xl cursor-pointer'>
            <h1 className='text-2xl font-bold tracking-wider'
            >{meal.strCategory}</h1>
            <img src={meal.strCategoryThumb} alt="" />
            <p className='text-yellow-500'>{meal.strCategoryDescription.substring(0, 150) + '....'}</p>


          </div>
        })}



      </div>




      <div className=' bg-brown-300 py-4 ' >
        <h1 className='text-center  text-3xl font-bold italic text-red-700 underline'>Random Meal</h1>
      </div>
      <div>
        <img src="https://themealdb.com/images/separator.jpg" alt="" />
      </div>


      <div className=' bg-brown-300  gap-7 p-5 items-start '>
        <div>
          {dat.meals.map((meal) => {
            return <div key={meal.idMeal} className='grid grid-cols-3  space-y-5 shadow-2xl cursor-pointer '>

              <div>
                <h1 className='text-2xl font-bold tracking-wider underline'
                >{meal.strMeal}</h1>
                <img src={meal.strMealThumb} alt="" />
                <p className='text-yellow-500'>{meal.strInstructions.substring(0, 150) + '....'}</p>

              </div>


              <div className='px-60 space-y-5'>
                <h1 className='font-bold text-3xl underline'>Ingredients</h1>

                <div className='space-y-5 text-yellow-500'>
                  <h1>{meal.strIngredient1}</h1>
                  <h1>{meal.strIngredient2}</h1>
                  <h1>{meal.strIngredient3}</h1>
                  <h1>{meal.strIngredient4}</h1>
                  <h1>{meal.strIngredient5}</h1>
                  <h1>{meal.strIngredient6}</h1>
                  <h1>{meal.strIngredient7}</h1>
                  <h1>{meal.strIngredient8}</h1>
                </div>


              </div>
            </div>






          })}

        </div>




      </div>






    </div>
  )
}

export default HomePage

