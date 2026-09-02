import { Link, useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { useProductsByCategory } from "../hooks/useCategory";

const CategoryProducts = () => {
  const { id } = useParams();

  const { data: products, isPending } = useProductsByCategory(id);
  console.log(products);
  if (isPending) return <p>Loading...</p>;

  return (
    <div className="w-full">
      <div className="bg-[#fbe8f6] flex flex-col items-center py-10">
        <h1 className="text-4xl font-semibold mb-2">Shop By Category</h1>
        <div className="flex gap-2">
          <Link to="/" className="text-[#404040] hover:text-[#e846ad]">
            Home
          </Link>
          <span className="text-[#404040]">&lt;</span>
          <span className="text-[#404040] cursor-pointer hover:text-[#e846ad]">
            Blogs & Articles
          </span>
        </div>
      </div>
    
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 px-6 my-12">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          image={product.image}
          category={product.category}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
    </div>
  );
};

export default CategoryProducts;
