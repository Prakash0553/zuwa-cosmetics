import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const NewArrival = () => {
  const {data: products, isLoading, error} = useProducts()

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-full px-4 py-20">
      <div className=" flex flex-col items-center py-8">
        <h1 className="text-4xl font-semibold mb-2">Just Dropped New Arrival</h1>
        <p className="text-[#404040] py-2">Check out our newest products.</p>
      </div>
    
    <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
      {products && products.slice(0,4).map((product, index) => (
        <ProductCard
          key={index}
          id={product._id}
          image={product.image}
          category={product.category.name}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
    </div>
  );
};

export default NewArrival;


