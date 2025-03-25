import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Icon } from '@rneui/themed';
import { map } from 'lodash';
import { Map } from '../../../components/Shared';
import { styles } from './Info.styles';

export function Info(props) {
    const { restaurant } = props;

    const listInfo= [
        { 
            text: restaurant.address, 
            iconType: '',
            iconName: 'map-marker' 
        },
        {
            text: restaurant.phone,
            iconType: 'material-community',
            iconName: 'phone'
        },
        {
            text: restaurant.email,
            iconType: 'material-community',
            iconName: 'at'
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Información del restaurante</Text>
            <Map location={restaurant.location} />
            {map(listInfo, (item, index) => (
                <ListItem key={index} bottomDivider>
                    <Icon 
                        type='material-community' 
                        name={item.iconName} 
                        color='#00a680' 
                    />
                    <ListItem.Content>
                        <ListItem.Title>{item.text}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            ))}

        </View>
    );
}