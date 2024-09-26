import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMutation, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import ProfileBlock from './components/profile-block/ProfileBlock';
import Header from './components/header/header.jsx';
import React, {useState} from 'react';

// Create the query client
const queryClient = new QueryClient();

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// Function to fetch restaurant data
const fetchRestaurants = async () => {
  const url = 'https://worldwide-restaurants.p.rapidapi.com/search';
  
  // Using URLSearchParams instead of FormData
  const params = new URLSearchParams();
  params.append('currency', 'USD'); 
  params.append('language', 'en_US'); 
  params.append('location_id', '15333482'); 

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


  const RestaurantList = ({ restaurants }) => {
    if (!restaurants || restaurants.length === 0) return <p>No restaurants found.</p>;
  
    return (
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.location_id}> {/* Use location_id as the key */}
            {restaurant.name} - Latitude: {restaurant.latitude}, Longitude: {restaurant.longitude} {/* Adjust as needed */}
          </li>
        ))}
      </ul>
    );
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
          <RestaurantList restaurants={restaurants} />
        </div>
      </ApolloProvider>
    </QueryClientProvider>
  );
}

export default App;
