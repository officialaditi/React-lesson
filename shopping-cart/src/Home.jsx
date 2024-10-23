import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "./redux-toolkit/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
 
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-center font-mono mt-2 ">All Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-5 p-3 ">
          {products.map((item) => {
            return <ProductCard  prod={item} key={item.id}/>
          })}
        </div>
      )}
    </>
  );
};
export default Home;
