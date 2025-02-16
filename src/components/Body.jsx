export default function Body() {
  return (
    <section className="px-10 text-[1.2rem] flex">
      <h2>Learning Redux toolkit</h2>
      <hr></hr>
      <div className="w-1/2 p-10 m-10">
        <img src="/hero.png" alt="hero" />
      </div>

      <div className="w-1/2 p-10 m-10">
        <h3>Steps</h3>
        <ul>
          <p className="text-3xl font-bold text-blue-800 inline-block">
            Writing into Redux store
          </p>
          <li>click on add button</li>
          <li>dipatch an action</li>
          <li>then call function (reducer)</li>
          <li>then it will modified the slide of the redux store</li>
        </ul>
        <ul>
          <p className="text-3xl font-bold text-blue-800">
            Reading Data from Redux Store
          </p>
          <li>useSelector(subscribing to the redux store)</li>
        </ul>
      </div>
    </section>
  );
}
