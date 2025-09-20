import React, { useEffect, useState } from "react";
import Hero from "../layout/Hero";
import Gadgets from "../products/Gadgets";
import NewItems from "../products/NewItems";
import PorductDetails from "../products/ProductDetails";
import ProGrid from "../products/ProGrid";
import axios from "axios";
import { useDispatch, useSelector} from "react-redux"

const Home = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state)=>state.products)
  const [bestSellerProduct, setBestSellerProduct] = useState(null)
useEffect(()=>{
    const fetchBestSeller = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
      );
      setBestSellerProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchBestSeller();
},[dispatch])
  return (
    <div>
      <Hero />
      {/* <Gadgets/> */}
      <div className="container text-center mt-15 mb-20 relative ">
        <h2 className="text-3xl font-bold mygreen">New Items</h2>
      </div>
      <NewItems />

      {/* best seller */}
      <h2 className="text-3xl text-center text-[#16F467] font-bold mb-4">
        Best Seller
      </h2>
      {/* <PorductDetails /> */}
      {bestSellerProduct? (<PorductDetails productId={bestSellerProduct._id}/>):(
        <p className="text-center">Loading best seller product...</p>
      )}

          {/* <div className="mt-20">
          <h2 className="text-3xl text-center font-medium mb-4 text-white">
            You may also like</h2>

           <ProGrid products={products} loading={loading} error={error}/>
        </div> */}
      
    </div>
  );
};

export default Home;
