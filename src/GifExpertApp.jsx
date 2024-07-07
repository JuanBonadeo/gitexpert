import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Boca Juniors'])

  const onAddCategory = (newcategory) => {
    if (categories.includes(newcategory)) return
    setCategories([newcategory, ...categories])
  }
  return (
    <>
      <h1> Gif Expert App</h1>
      <AddCategory onAddCategory={onAddCategory} />
      
      {categories.map(category =>
      (
        <GifGrid key={category} category={category} />
      )
      )}





    </>
  )
}

