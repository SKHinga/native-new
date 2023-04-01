import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      console.log(response.data);
      const users = response.data.users;
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        navigation.navigate('Dashboard', { user });
      } else {
        Alert.alert('Error', 'Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput onChangeText={(text) => setUsername(text)} value={username} />
      <Text>Password:</Text>
      <TextInput onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;