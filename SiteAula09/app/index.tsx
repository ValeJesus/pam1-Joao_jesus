import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        onChangeText={setNome}
      />

      <Text style={styles.title}>Digite o seu curso:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu curso"
        onChangeText={setCurso}
      />

      {/* Substituindo Button por TouchableOpacity */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert(`Olá, ${nome}! Seu curso é: ${curso}.`)}
      >
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
  },
});
