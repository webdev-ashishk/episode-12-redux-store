import { useEffect, useState } from 'react';

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProductData();
  }, []);
  async function fetchProductData() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (!response.ok) {
        throw new Error('response is not ok rendered!');
      }
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(data);
  return (
    <section>
      <h1>ProductList!</h1>
      {data.length === 0 ? (
        <h3 className="text-center font-bold text-2xl bg-purple-500 h-[100vh]">
          Loading.....
        </h3>
      ) : (
        <ul className="p-10">
          {data.map((element) => (
            <div
              key={element.id}
              className="bg-green-700 inline-block p-2 m-2 w-[200px] text-center"
            >
              <li>{element.name}</li>
              <li>{element.website}</li>
              <button className="bg-yellow-800 p-2 m-2 text-center">
                Add+
              </button>
            </div>
          ))}
        </ul>
      )}
    </section>
  );
}
