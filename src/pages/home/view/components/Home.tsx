import { useState, type FC } from "react";
import { Outlet, Link } from 'react-router-dom';
import { Content } from "../../../../common/view/components/content";

const Home: FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Content>
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
            <div id="detail">
                <Outlet />
            </div>
        </Content>
    )
}

export default Home