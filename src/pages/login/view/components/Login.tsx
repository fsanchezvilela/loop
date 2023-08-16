import { FC } from 'react';
import { Content } from '../../../../common/view/components/content';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  const access_token = window.localStorage.getItem('access_token');
  return (
    <Content>
      {access_token ? (
        <>
          <h1>
            User Logged Please{' '}
            <Link to={'/'} className="text-cloud">
              Click Here
            </Link>{' '}
            to Go to the Main Page
          </h1>
        </>
      ) : (
        <h1>Please Wait, creating access_tokens</h1>
      )}
    </Content>
  );
};

export default Login;
