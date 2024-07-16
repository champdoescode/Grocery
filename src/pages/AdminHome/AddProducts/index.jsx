import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const AddProducts = () => {
  const { control, handleSubmit, reset } = useForm();
  const [isSaved, setIsSaved] = useState(false); // State to manage alert visibility

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://envanto-backend-api.onrender.com/api/Products', data);
      console.log('Product saved:', response.data);
      setIsSaved(true); // Set state to show alert
      reset(); // Reset form fields
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 absolute top-0 z-[100] w-full"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/1737995.jpg')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black background
          backdropFilter: 'blur(10px)', // Optional: adds a blur effect to the background
        }}
      >
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Product Form</h1>
        {isSaved && ( // Show alert if isSaved is true
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Product saved successfully.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setIsSaved(false)} // Click to dismiss alert
              >
                <title>Close</title>
                <path
                  fillRule="evenodd"
                  d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 6.36 5.652a.5.5 0 1 0-.708.708L9.293 10l-3.64 3.64a.5.5 0 1 0 .708.708L10 10.707l3.64 3.64a.5.5 0 0 0 .708-.708L10.707 10l3.64-3.64a.5.5 0 0 0 0-.708z"
                />
              </svg>
            </span>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label htmlFor="cat_name" className="block text-sm font-medium text-white">
                Category Name
              </label>
              <Controller
                name="cat_name"
                control={control}
                defaultValue=""
                rules={{ required: 'Category Name is required' }}
                render={({ field }) => (
                  <input
                    id="cat_name"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>

            {/* Subcategory */}
            <div>
              <label htmlFor="subCat_name" className="block text-sm font-medium  text-white">
                Subcategory Name
              </label>
              <Controller
                name="subCat_name"
                control={control}
                defaultValue=""
                rules={{ required: 'Subcategory Name is required' }}
                render={({ field }) => (
                  <input
                    id="subCat_name"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Name */}
            <div>
              <label htmlFor="prod_name" className="block text-sm font-medium  text-white">
                Product Name
              </label>
              <Controller
                name="prod_name"
                control={control}
                defaultValue=""
                rules={{ required: 'Product Name is required' }}
                render={({ field }) => (
                  <input
                    id="prod_name"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>

            {/* Brand */}
            <div>
              <label htmlFor="brand" className="block text-sm font-medium  text-white">
                Brand
              </label>
              <Controller
                name="brand"
                control={control}
                defaultValue=""
                rules={{ required: 'Brand is required' }}
                render={({ field }) => (
                  <input
                    id="brand"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium  text-white">
                Price
              </label>
              <Controller
                name="price"
                control={control}
                defaultValue=""
                rules={{ required: 'Price is required' }}
                render={({ field }) => (
                  <input
                    id="price"
                    type="number"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium  text-white">
              Description
            </label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: 'Description is required' }}
              render={({ field }) => (
                <textarea
                  id="description"
                  {...field}
                  rows={3}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium  text-white">
              Image URL
            </label>
            <Controller
              name="image"
              control={control}
              defaultValue=""
              rules={{ required: 'Image URL is required' }}
              render={({ field }) => (
                <input
                  id="image"
                  {...field}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product Quantity */}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium  text-white">
                Product Quantity
              </label>
              <Controller
                name="quantity"
                control={control}
                defaultValue=""
                rules={{ required: 'Product Quantity is required' }}
                render={({ field }) => (
                  <select
                    id="quantity"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">Select unit</option>
                    <option value="liter">Liter</option>
                    <option value="gm">Gram</option>
                    <option value="meter">Meter</option>
                    {/* Add more units as needed */}
                  </select>
                )}
              />
            </div>

            {/* Discount */}
            <div>
              <label htmlFor="discount" className="block text-sm font-medium  text-white">
                Discount
              </label>
              <Controller
                name="discount"
                control={control}
                defaultValue=""
                rules={{ required: 'Discount is required' }}
                render={({ field }) => (
                  <input
                    id="discount"
                    type="number"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>

            {/* Total Stock */}
            <div>
              <label htmlFor="total_stock" className="block text-sm font-medium  text-white">
                Total Stock
              </label>
              <Controller
                name="total_stock"
                control={control}
                defaultValue=""
                rules={{ required: 'Total Stock is required' }}
                render={({ field }) => (
                  <input
                    id="total_stock"
                    type="number"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Available Stock */}
            <div>
              <label htmlFor="available_stock" className="block text-sm font-medium  text-white">
                Available Stock
              </label>
              <Controller
                name="available_stock"
                control={control}
                defaultValue=""
                rules={{ required: 'Available Stock is required' }}
                render={({ field }) => (
                  <input
                    id="available_stock"
                    type="number"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>

            {/* Sold Stock */}
            <div>
              <label htmlFor="sold_stock" className="block text-sm font-medium  text-white">
                Sold Stock
              </label>
              <Controller
                name="sold_stock"
                control={control}
                defaultValue=""
                rules={{ required: 'Sold Stock is required' }}
                render={({ field }) => (
                  <input
                    id="sold_stock"
                    type="number"
                    {...field}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                )}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
