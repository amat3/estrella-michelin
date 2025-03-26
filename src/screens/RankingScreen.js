import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { map } from 'lodash';
import { RestaurantRanking } from '../components/Restaurants';
import { db } from '../utils';

export function RankingScreen() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, 'restaurants'),
      orderBy('ratingMedia', 'desc'),
      limit(3)
    )

    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs);
    });
  }, []);


  return (
    <ScrollView>
    
    {map(restaurants, (restaurant, index) => {
    return (
      <RestaurantRanking 
        key={index} 
        index={index} 
        restaurant={restaurant.data()} 
      />
      )
    })}
    
    </ScrollView>
  );
};

export default RankingScreen;