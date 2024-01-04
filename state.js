import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("Mehmet");
  const [age  , setAge] = useState(29); 
  const [isVisible, setIsVisible] = useState(true); 

  return (
    <SafeAreaView style={styles.container}>
      <Button title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}

    />

    {isVisible && (
      <>
        <Text>İsim:  {name}</Text>
        <Text>Yaş:  {age}</Text>
        <Button title="İsim Değiştir" onPress={() => setName("Ahmet")}></Button>
        <Button title="Yaşı Değiştir" onPress={() => setName(30)}></Button>


      
      </>
    )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

export default App;