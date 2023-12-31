import { useState, type FC } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Content } from '../../../../common/view/components/content';
import { SearchBox } from '../../../../common/view/components/searchbox';
import { DataTable } from '../../../../common/view/components/data-table/DataTable';

import { columns } from './components/table/columns.data';
import { useHomeDataTable } from '../hooks/useHomeDataTable';

const Home: FC = () => {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState<string>('');
  const [data] = useHomeDataTable();
  return (
    <Content>
      <SearchBox
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="mx-auto">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="my-3 flex flex-auto flex-col gap-3">
        <Link to={`/1`}>Children Nav to 1</Link>
        <Link to={`/2`}>Children Nav to 2</Link>
      </div>
      <div className="my-3 flex flex-auto flex-col gap-3">
        <Link to={`podcast/1`}>Page Nav to 1</Link>
        <Link to={`podcast/2`}>Page Nav to 2</Link>
      </div>

      <div className="card my-3">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div id="detail" className="my-3">
        <Outlet />
      </div>
    </Content>
  );
};

export default Home;
