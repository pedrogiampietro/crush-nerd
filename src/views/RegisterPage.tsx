import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export function RegisterPage() {
  const navigation = useNavigation() as any;

  const handleBackPress = () => {
    navigation.navigate("NerdSwipePage");
  };

  const handleCreateEmail = () => {
    navigation.navigate("VerifyEmailPage");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Image
          style={styles.image}
          source={require("../../assets/people-ground.png")}
        />

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handleBackPress()}
          >
            <Ionicons name="arrow-back" size={16} color="#4B164C" />
          </TouchableOpacity>
          <Text style={styles.title}>Adicione seu e-mail</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu melhor e-mail"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCreateEmail}>
          <View style={styles.containerButton}>
            <Ionicons name="mail-outline" size={24} color="black" />
          </View>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: "#4B164C",
    borderWidth: 1,
    borderRadius: 24,
    width: 32,
    height: 32,
    marginRight: 30,
  },
  containerButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 5,
    marginRight: 10,
  },
  button: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4B164C",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    color: "#4B164C",
    textAlign: "center",
    fontFamily: "roboto-bold",
  },
  inputContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#CCC",
    backgroundColor: "#FFF",
    borderRadius: 15,
    top: -15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    marginRight: 10,
    padding: 15,
  },
});
