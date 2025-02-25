import React from 'react';
import { View } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import { map } from "lodash"

export function AccountOptions() {
    const menuOptions = getMenuOptions()

  return (
    <View>
      {map(menuOptions, (menu, index) => {
        <ListItem key={index}>
            <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
      })}
    </View>
  );
};

function getMenuOptions() {
    return [
        {
            title: "Cambiar Nombre y Apellidos"
        },
        {
            title: "Cambiar Email"
        },
        {
            title: 'Cambiar contraseña'
        }
    ]
}