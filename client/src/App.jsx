import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useQuery, useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ProfileBlock from './components/profile-block/ProfileBlock';
import Header from './components/header/header.jsx';
import React from 'react';

// Create the query client
const queryClient = new QueryClient();

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// Function to fetch restaurant data
const fetchRestaurants = async () => {
  const response = await fetch('https://worldwide-restaurants.p.rapidapi.com/restaurants/list', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_API_KEY_HERE',
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Display restaurant data
const RestaurantList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['restaurants'], 
    queryFn: fetchRestaurants,  
  });

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

// Function to add a restaurant
const addRestaurant = async (newRestaurant) => {
  const response = await fetch('http://localhost:3001/api/restaurants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestaurant),
  });

  if (!response.ok) {
    throw new Error('Failed to add restaurant');
  }

  return response.json();
};


/// Add a restaurant using mutations
const AddRestaurant = () => {
  const mutation = useMutation({
    mutationFn: addRestaurant, // The function to add the restaurant
    onSuccess: () => {
      queryClient.invalidateQueries(['restaurants']); // Invalidate the 'restaurants' query
    },
  });

  const handleAddRestaurant = () => {
    const newRestaurant = { id: Date.now(), name: 'New Restaurant', cuisine: 'Italian' };
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
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Header />
        <div className='flex-column justify-flex-start min-100-vh'>
          <Outlet />
          <RestaurantList />
          <AddRestaurant />
        </div>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default App;
