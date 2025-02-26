import React, { useState } from 'react';
import { View } from 'react-native';
import { ListItem, Icon, Text } from '@rneui/themed';
import { Modal } from '../../components/Shared';

export function AccountOptions() {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const onCloseOpenModal = () => setShowModal(!showModal);

  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(<Text>Cambiar nombre y apellidos</Text>)
    } else if (key === "email") {
      setRenderComponent(<Text>Cambiar email</Text>)
    } else if (key === "password") {
      setRenderComponent(<Text>Cambiar contraseña</Text>)
    }

    onCloseOpenModal()
  }
  
  const menuOptions = getMenuOptions(selectedComponent)

  return (
    <View>
      {menuOptions.map((menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
            <Icon type={menu.iconType} name={menu.iconNameLeft} color={menu.iconColorLeft} />
            <ListItem.Content>
                <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
            <Icon type={menu.iconType} name={menu.iconNameRight} color={menu.iconColorRight} />
        </ListItem>
      ))} 

      <Modal show={showModal} close={() => onCloseOpenModal()}>
        {renderComponent}
      </Modal>
    </View>
  );
};

function getMenuOptions(selectedComponent) {
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("displayName")
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("email")
        },
        {
            title: 'Cambiar contraseña',
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("password")
        }
    ]
}