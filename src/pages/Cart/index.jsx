import { useCart } from '../../Contexts/CartContext';

const MyCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(index, newQuantity); // Update quantity in cart
    }
  };

  return (
    <div className="container mx-auto pt-40 px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">Shopping Cart</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cartItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="object-cover w-full h-full"
                style={{ maxHeight: '200px' }} // Set max height to ensure consistent size
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.product.name}</h2>
              <p className="text-gray-600 mb-2">Size: {item.size}</p>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 fill-current ${i < Math.floor(item.product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .288l2.833 8.718h9.167l-7.417 5.392 2.833 8.719-7.416-5.391-7.416 5.391 2.833-8.719-7.417-5.392h9.167z" />
                  </svg>
                ))}
                <span className="ml-2">{item.product.rating} Review(s)</span>
              </div>
              <p className="text-green-600 font-bold">₹{item.product.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleQuantityChange(index, item.quantity - 1)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded"
                >
                  -
                </button>
                <p className="text-gray-700 px-4">{item.quantity}</p>
                <button
                  onClick={() => handleQuantityChange(index, item.quantity + 1)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
              <p className="text-gray-600 mt-2">Total Price: ₹{(item.product.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => handleRemove(index)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600 self-start"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="text-3xl font-bold text-center">Total Price: ₹{calculateTotalPrice()}</p>
      </div>
    </div>
  );
};

export default MyCart;
