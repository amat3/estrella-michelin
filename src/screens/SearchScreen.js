import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { SearchBar, ListItem, Avatar, Icon, Text } from '@rneui/themed';
import { collection, query, startAt, endAt, limit, orderBy, getDocs } from 'firebase/firestore';
import { size, map } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { screen } from '../utils';
import { db } from '../utils';
import { Loading } from '../components/Shared';

export function SearchScreen() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(null);
 
  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, 'restaurants'),
        orderBy('name'),
        startAt(searchText),
        endAt(`${searchText}\uf8ff`),
        limit(10)
      );

      const querySnapshot = await getDocs(q);
      setSearchResults(querySnapshot.docs);
    })();
  }, [searchText]);

  const goToRestaurant = (idRestaurant) => {
    navigation.navigate(screen.restaurant.tab, { 
      screen: screen.restaurant.restaurant, 
      params: { 
        id: idRestaurant, 
      } 
    });
  }

  return (
    <>
      <SearchBar 
        placeholder="Buscar restaurante"
        value={searchText}
        onChangeText={(text) => setSearchText(text)} 
        />

        {!searchResults && <Loading show text="Cargando..." />}
    
      <ScrollView>
        {size(searchResults) === 0 ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text>No hay restaurantes que coincidan con tu búsqueda</Text>
          </View>
          ) : (
            map(searchResults, (item) => {
              const data = item.data();

              return (
                <ListItem key={data.id} bottomDivider onPress={() => goToRestaurant(data.id)}>
                  <Avatar source={{ uri: data.images[0] }} rounded />
                  <ListItem.Content>
                    <ListItem.Title>{data.name}</ListItem.Title>
                  </ListItem.Content>
                  <Icon
                    type='material-community'
                    name='chevron-right'
                  />
                </ListItem>
              )
            })
          )}
        </ScrollView>
    </>
  );
};
