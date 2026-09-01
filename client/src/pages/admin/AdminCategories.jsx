import { Link } from "react-router";
import {DeleteIcon} from "lucide-react"
import { useGetCategory } from "../../hooks/useCategory";

const CategoryList = () => {
  const { data: products, isPending, error } = useGetCategory();
  console.log(products);

  const TABLE_HEAD = ["image", "tItle", "_id", "edit", "delete"];

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-full px-6 my-12">
      <div className="my-5 flex justify-end">
        <Link to="/admin/add">
        <button className="rounded-lg bg-[#e846ad] px-5 py-2.5 font-medium text-white cursor-pointer">
          Add Product
        </button>
        </Link>
      </div>

      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm ">
        <table className="w-full min-w-[700px] text-left">
          <thead className="bg-gray-100">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-gray-200 px-6 py-4 text-sm font-semibold text-gray-700"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b border-gray-100 transition hover:bg-gray-50"
              >
                {/* IMAGE */}
                <td className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                </td>

                {/* TITLE */}
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {product.name}
                </td>

                {/* ID */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  {product._id}
                </td>

                {/* EDIT */}
                <td className="px-6 py-4">
                  <Link to="/">
                    <button className="rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-600">
                      Edit
                    </button>
                  </Link>
                </td>

                {/* DELETE */}
                <td className="px-6 py-4">
                  <button>
                  <DeleteIcon fill="#e846ad"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
