import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  View,
} from 'react-native';

const App = () => {
    const [users, setUsers] = useState([
      {id : 1, name: "Ahmet"},
      {id: 2, name: "Mehmet"},
    
    ]);

    const handlePress = () => {
        setUsers((prev) => [
          {
            id: Math.floor(Math.random() * 1000),
            name: Math.floor(Math.random() * 1000),
           },
           ...prev,
          ]);
    };

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
              <View style={styles.item}>
                  <Text style={styles.text}>{item.name}</Text>
              </View>
          )}
          />

        <Button title="Add" onPress={handlePress}/>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item:{
    backgroundColor: "#eee",
    padding: 10,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
  },

});

export default App;