import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Headers() {
  return (
    <section>
      <ul className="flex justify-around text-2xl font-bold p-2 m-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">ProductList</Link>
        </li>
        <li>
          <Link to="/cart">
            <FaCartArrowDown />
          </Link>
        </li>
      </ul>
      <hr />
    </section>
  );
}
