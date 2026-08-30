import {  Link } from "react-router";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(products)

  return (
    <div className="w-full mx-auto">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">All Products</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040] hover:text-[#e846ad]">
            Home
          </Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040] cursor-pointer hover:text-[#e846ad]">
            Products
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4 my-20">
        {products && products.map((product, index) => (
          <ProductCard
            key={index}
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

export default Products;
