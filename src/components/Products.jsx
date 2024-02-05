import React, { useEffect, useState, useRef } from "react";
import { categoryApi, productsApi } from "../api";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoires, setCategories] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState([]);
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const [filter, setFilter] = useState({
    category: [],
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    (async () => {
      const data = await productsApi();
      const categoryResp = await categoryApi();
      if(data) {
        setProducts(data);
      }
      if(categoryResp) {
        setCategories(categoryResp);
      }
    })();
  }, []);

  function createFilterString({category, minPrice, maxPrice}) {
    // Initialize an empty filter string
    let filterString = '';
  
    // Add category filter if provided
    if (category?.length > 0) {
      category.forEach((cat)=>{
        filterString += `category=${encodeURIComponent(cat)}&`;
      })
    }
  
    // Add minPrice filter if provided
    if (minPrice !== undefined && minPrice !== null) {
      filterString += `minPrice=${encodeURIComponent(minPrice)}&`;
    }
  
    // Add maxPrice filter if provided
    if (maxPrice !== undefined && maxPrice !== null) {
      filterString += `maxPrice=${encodeURIComponent(maxPrice)}&`;
    }
  
    // Remove trailing "&" if present
    if (filterString.endsWith('&')) {
      filterString = filterString.slice(0, -1);
    }
  
    return filterString;
  }
  

  const handleCategory=(e,categoryId)=>{
    if(e.target.checked) {
      setSelectedCategory((prev)=>[...prev,categoryId])
    }else{
    const updatedCategory = selectedCategory.filter((id)=>id !== categoryId);
    setSelectedCategory([...updatedCategory])
    }
  }

  useEffect(()=>{
    console.log(filter)
  },[filter])

  const handleFilter=async()=>{
    if(!minPriceRef.current && !maxPriceRef.current) {
      return 
    }
    const minPrice =  minPriceRef.current.value ?  +minPriceRef.current.value : null
    const maxPrice =  maxPriceRef.current.value ?  +maxPriceRef.current.value : null

    const filter = {
      minPrice,maxPrice,category: [...selectedCategory]
    }
    
    const query = createFilterString(filter)
    const productByFilter = await productsApi(query);
    setProducts(productByFilter);
  }

  return (
    <div className="min-h-screen mt-20 flex flex-col items-center md:flex-row md:items-start justify-around overflow-auto">
      <div className="filter px-6 md:w-1/5 border-r-blue-600">
        <div className="categories my-10">
          {categoires.map((category) => {
            return (
              <div className="flex items-center" key={category._id}>
                <label
                  htmlFor={category.name}
                  className="flex items-center   cursor-pointer gap-5"
                >
                  <input
                    type="checkbox"
                    className="checkbox my-2"
                    onChange={(e)=>handleCategory(e,category._id)}
                    id={category.name}
                  />
                  <span>{category.name}</span>
                </label>
              </div>
            );
          })}
        </div>
        <div className="filter-by-price flex flex-col space-y-4">
        <label htmlFor="min" className="">
            Min Price
            <input
              type="number"
              id="min"
              ref={minPriceRef}
              placeholder="min price"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label htmlFor="max">
            Max Price
            <input
              type="number"
              placeholder="max price"
              id="max"
              ref={maxPriceRef}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          
        </div>
        <button className="btn my-10" onClick={handleFilter}>Filter</button>
      </div>
      <div className="products md:w-1/2">
        {products?.length > 0 ? (
          <div className="flex items-center flex-wrap gap-3 justify-around max-h-screen overflow-y-scroll">
            {products.map((product) => {
              return (
                <div key={product._id} className="card w-72  bg-base-100 shadow-xl">
                  <figure className="size-2/5	m-auto">
                    <img src={product.image} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.title}
                    </h2>
                    <p className="text-sm">{product.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now At ${product.price}</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h2>No Product found</h2>
        )}
      </div>
    </div>
  );
};

export default Products;
