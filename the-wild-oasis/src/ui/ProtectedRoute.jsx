import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. load authenticated user
  const { isAuthenticated, isLoading, fetchStatus } = useUser();

  // 2. if no authentecated , redirect login
  useEffect(() => {
    if (!isAuthenticated && !isLoading && fetchStatus !== 'fetching')
      navigate('/login');
  }, [isAuthenticated, isLoading, navigate, fetchStatus]);

  // 3. loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. render app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
