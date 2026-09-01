import { useAllOrders } from "../../hooks/useOrder";

const OrderList = () => {
  const { data: orders, isPending, error } = useAllOrders();
  console.log(orders);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="w-full px-6 md:px-16 lg:px-30 pt-16 md:py-16 min-h-[80vh] mx-auto">
      <h1 className="text-xl text-center font-semibold mb-4 text-[#e846ad]">Oredr List</h1>
      {orders?.data?.map((order) =>
        order.cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex flex-col md:flex-row justify-between bg-primary/80
               border-2 border-[#f9d7f0] rounded-lg mt-4 p-2 max-w-4xl mx-auto"
          >
            <div className="flex flex-col gap-2 md:flex-row">
              <img
                src={item.image}
                alt=""
                className="md:max-w-45 aspect-video h-auto object-cover object-bottom rounded"
              />
              <div className="flex flex-col p-4 ">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-gray-400">
                  Quantity: {item.quantity}
                </p>
                <p className="text-sm text-gray-400 mt-auto">
                  Price: {item.price}
                </p>
                <p className="text-sm text-gray-700 mt-auto">
                  status: {order.paymentStatus}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:items-end md:text-right justify-between p-4">
              <div className="flex items-center gap-4">
                <p className="text-lg font-semibold mb-2">Total</p>
              </div>
              <div className="text-sm">
                <p>
                  <span className="text-gray-400 mb-2">Rs: </span>
                  {item.quantity * item.price}
                </p>
                <p>
                  <span className="text-gray-400">user: </span>
                  {order.userId.name}
                </p>
                <p>
                  <span className="text-gray-400">email: </span>
                  {order.userId.email}
                </p>
              </div>
            </div>
          </div>
        )),
      )}
    </div>
  );
};

export default OrderList;
