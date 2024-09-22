import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

// i believe we need to import the header here 

import './App.css'
import ProfileBlock from './components/profile-block/ProfileBlock';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: '/http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    
     <ApolloProvider client={client}>
      <ProfileBlock />
      <div className='flex-column justify-flex-start min-100-vh'>
        <Outlet />
      </div>
     </ApolloProvider>
  
  );
}  
export default App;
