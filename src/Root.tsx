import { useState } from "react";
import { Outlet, Link, useLoaderData } from 'react-router-dom';
import "./Root.css";

function Root() {
  useLoaderData()
  const [count, setCount] = useState(0);
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      <div className="flex flex-col flex-auto gap-3">
        <Link to={`/1`}>Children Nav to 1</Link>
        <Link to={`/2`}>Children Nav to 2</Link>
      </div>
      <div className="flex flex-col flex-auto gap-3">
        <Link to={`podcast/1`}>Page Nav to 1</Link>
        <Link to={`podcast/2`}>Page Nav to 2</Link>
      </div>
      <h1 className="text-3xl font-bold underline">´Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Root.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  );
}

export default Root;
