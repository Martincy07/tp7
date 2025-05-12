import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'; // Asegurate de importar esto también
import { SafeAreaView } from 'react-native-safe-area-context';

// ...dentro del return de HomeScreen




function HomeScreen({ email, password, setEmail, setPassword }) {
  return (
    <SafeAreaView style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
                    <TouchableOpacity style={styles.botonIngresar} onPress={() => alert('Ingresando...')}>
              <Text style={styles.botonTexto}>Ingresar</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={{
              title: 'Inicio 🏠',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#2390f2',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 22,
                
              },
            }}
          >
            {(props) => (
              <HomeScreen
                {...props}
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
              />

            )}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 110,
    color: '#000',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    marginVertical: 10,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  botonIngresar: {
    backgroundColor: '#2390f2',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
});
