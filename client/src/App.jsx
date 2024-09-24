import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ProfileBlock from './components/profile-block/ProfileBlock';
import Header from './header';

const client = new ApolloClient({
  uri: '/http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

//function to fetch restaurant data
const fetchRestaurants = async () => {
  const response = await fetch('https://worldwide-restaurants.p.rapidapi.com/restaurants/list', {
      method: 'GET',
      headers: {
          'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea',
          'Content-Type': 'application/json'
      }
  });

  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  return response.json();
};

//display restaurant data
const RestaurantList = () => {
  const { data, error, isLoading } = useQuery(['restaurants'], fetchRestaurants);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
      <ul>
          {data.restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                  {restaurant.name} - {restaurant.cuisine}
              </li>
          ))}
      </ul>
  );
};

//adding a restaurant by using mutations 
const AddRestaurant = () => {
  const mutation = useMutation(AddRestaurant, {
      onSuccess: () => {
          queryClient.invalidateQueries(['restaurants']);
      }
  });

  const handleAddRestaurant = () => {
      const newRestaurant = { id: Date.now(), name: 'La Nonna', cuisine: 'Italian' };
      mutation.mutate(newRestaurant);
  };

  return (
      <div>
          <button onClick={handleAddRestaurant}>Add Restaurant</button>
          {mutation.isLoading && <p>Adding...</p>}
          {mutation.isError && <p>Error adding restaurant: {mutation.error.message}</p>}
          {mutation.isSuccess && <p>Restaurant added!</p>}
      </div>
  );
};




function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <ProfileBlock />
          <div className='flex-column justify-flex-start min-100-vh'>
            <Outlet />
            <RestaurantList />
            <AddRestaurant />
          </div>
     </ApolloProvider>

    </>
  )
}

export default App
