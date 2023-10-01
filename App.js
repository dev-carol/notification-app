import React, { useState } from "react";
import { StyleSheet, Pressable, Text, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [qtd, setQtd] = useState("");
  const [time, setTime] = useState("");
  const [isChecked, setIsChecked] = useState(false); 

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleValueChange = (inputValue) => {
    setValue(inputValue);
  };

  const handleQtdChange = (inputQtd) => {
    setQtd(inputQtd);
  };

  const handleTimeChange = (inputTime) => {
    setTime(inputTime);
  };

  const toggleCheckBox = () => {
    setIsChecked(!isChecked); 
  };

  return (
    <View style={styles.container}>
      <Text>App notificação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu texto"
        value={text}
        onChangeText={handleTextChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite um valor"
        value={value}
        onChangeText={handleValueChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={qtd}
        onChangeText={handleQtdChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Tempo"
        value={time}
        onChangeText={handleTimeChange}
      />

    
      <View style={styles.containerButtons}>
        <Pressable
        style={[styles.checkBox, isChecked && styles.checked]}
        onPress={toggleCheckBox}

      >

        {isChecked && <Text>X</Text>}
      </Pressable>
        <Pressable style={[styles.button]}>
          <Text style={styles.text}>Enviar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "50%",
    marginTop: 20,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#ccc",
    color: "#fff",
    marginLeft: 20,
  },
  checkBox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  checked: {
    backgroundColor: "#ccc",
  },
});