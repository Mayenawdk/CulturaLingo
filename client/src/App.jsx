import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ProfileBlock from './components/profile-block/ProfileBlock';
import Header from './components/header/header.jsx'; // Using .jsx as in one of the branches
import DropDown from './components/dropDown/DropDown'; 



// Create the query client
const queryClient = new QueryClient();

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// Function to fetch restaurant data
const fetchRestaurants = async () => {
  const url = 'https://worldwide-restaurants.p.rapidapi.com/search';

  const params = new URLSearchParams();
  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '15333482');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '15699453');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '2368427');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '23789757');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '23486451');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '23794947');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '6650362');

  params.append('currency', 'USD');
  params.append('language', 'en_US');
  params.append('location_id', '14758505');


  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea',
      'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(`Network response was not ok: ${JSON.stringify(errorBody)}`);
  }

  return response.json();
};

// Function to add a restaurant
const addRestaurant = async (newRestaurant) => {
  const response = await fetch('https://worldwide-restaurants.p.rapidapi.com/search', {
    method: 'POST',
    headers: {
      'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
      'x-rapidapi-key': '449134927emsh5c9b7a554d90d46p17b74djsnca468ddc31ea',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newRestaurant),
  });

  if (!response.ok) {
    throw new Error('Failed to add restaurant');
  }

  return response.json();
};

// Add a restaurant using mutations
const AddRestaurant = () => {
  const mutation = useMutation({
    mutationFn: addRestaurant,
    onSuccess: () => {
      queryClient.invalidateQueries(['restaurants']);
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

// Combine everything into a single App component
function App() {
  const [restaurants, setRestaurants] = useState([]); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); 

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchRestaurants();
      console.log("Fetched Data:", response);
      setRestaurants(response.results.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRestaurant = (id) => {
    const restaurant = restaurants.find(r => r.location_id === id);
    setSelectedRestaurant(restaurant);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={client}>
        <Header />
        <div className='flex-column justify-flex-start min-100-vh'>
          <Outlet />
          <AddRestaurant />
          <button onClick={handleClick}>Fetch Restaurants!</button>
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching data: {error}</p>}
          
      
          <DropDown 
            restaurants={restaurants} 
            onSelect={handleSelectRestaurant} 
          />

      
          {selectedRestaurant && (
            <div>
              <h3>Selected Restaurant:</h3>
              <p>{selectedRestaurant.name}</p>
              <p>Latitude: {selectedRestaurant.latitude}</p>
              <p>Longitude: {selectedRestaurant.longitude}</p>
            </div>
          )}
        </div>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default App;
