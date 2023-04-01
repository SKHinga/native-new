import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  const user = navigation.getParam('user', {});

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome {user.firstName} {user.lastName}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>User Details:</Text>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Staff" onPress={() => navigation.navigate('Staff')} />
        <Button title="Continents" onPress={() => navigation.navigate('Continents')} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default Dashboard;