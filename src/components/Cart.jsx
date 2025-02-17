import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const storeData = useSelector((store) => store.cart.items);
  console.log(storeData);
  const dispatch = useDispatch();
  const handleRemoveItems = (id) => {
    dispatch(removeItem(id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="text-5xl font-bold p-2 m-2 text-center">
      <button
        className="bg-green-700 p-2 m-2 rounded-lg"
        onClick={handleClearCart}
      >
        clearCart
      </button>
      <hr />
      {storeData.length === 0 ? (
        <div>store data is emty please add items...</div>
      ) : (
        <ul>
          {storeData.map((element, index) => (
            <div key={index} className="flex justify-center items-center">
              <li>
                {element.name}
                <span className="inline-block">
                  <MdDeleteForever
                    className="text-red-500"
                    onClick={() => handleRemoveItems(element.id)}
                  />
                </span>
              </li>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Cart;
