import { useState } from "react";

function CompyuterPageData({categoriesData}) {
    const [selectedProducts, setSelectedProducts] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
  
    const handleSelectProduct = (categoryId, product) => {
      setSelectedProducts(prev => ({
        ...prev,
        [categoryId]: product
      }));
    };
  
    const handleCalculateTotal = () => {
      const total = Object.values(selectedProducts).reduce((sum, product) => {
        return sum + parseFloat(product.price);
      }, 0);
      setTotalPrice(total);
    };
  
    return (
      <div className="p-4">
        <div className="flex flex-wrap gap-6">
          {categoriesData.map(category => (
            <div key={category.id} className="border rounded-lg p-4 w-64">
              <h2 className="text-lg font-bold mb-3">{category.name}</h2>
              {category.products.length > 0 ? (
                <ul className="space-y-2">
                  {category.products.map(product => (
                    <li key={product.id} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`category-${category.id}`}
                        onChange={() => handleSelectProduct(category.id, product)}
                        checked={selectedProducts[category.id]?.id === product.id}
                      />
                      <span>{product.name} - ${product.price}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">Mahsulotlar yo‘q</p>
              )}
            </div>
          ))}
        </div>
  
        <div className="mt-8">
          <button
            onClick={handleCalculateTotal}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Narxni hisoblash
          </button>
          <div className="mt-4 text-xl font-semibold">
            Umumiy narx: ${totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
  
  export default CompyuterPageData;