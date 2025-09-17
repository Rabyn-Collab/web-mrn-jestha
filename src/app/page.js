import axios from 'axios'
import Image from 'next/image';
import React from 'react'

export default async function Page() {

  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  const categories = response.data.categories;

  return (
    <div className='p-10'>

      <Image
        src={'https://images.unsplash.com/photo-1757252800867-2e78e08a6d53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'}
        width={500}
        quality={10}
        height={500}
        alt="logo"
      />

      <h1>Hello jee</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veniam quos deserunt corporis vero odio nihil at, facilis recusandae, aliquid dolor harum optio reiciendis placeat. Omnis deleniti ratione aliquam reiciendis?</p>

      {categories.map((category) => (
        <div key={category.idCategory}>
          <h2>{category.strCategory}</h2>
          <img src={category.strCategoryThumb} alt="" />
          <p>{category.strCategoryDescription}</p>
        </div>
      ))}

    </div>
  )
}
