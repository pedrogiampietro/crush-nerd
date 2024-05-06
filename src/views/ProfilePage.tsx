import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ToastAndroid,
  TextInput,
} from "react-native";
import styled, { css } from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { nerds } from "../nerds/nerds";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Slider } from "@miblanchard/react-native-slider";
import { SliderContainer } from "../shared/components/SliderContainer";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GoToHomeButton } from "../shared/components/GoToHomeButton";
import { useNavigation } from "@react-navigation/native";

export function ProfilePage() {
  const [selectedGender, setSelectedGender] = React.useState();
  const [sliderValue, setSliderValue] = React.useState([18, 25]);
  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [images, setImages] = React.useState<any>([]);
  const [name, setName] = React.useState("");
  const [aboutMe, setAboutMe] = React.useState("");

  const navigation = useNavigation() as any;
  const { top } = useSafeAreaInsets();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false);
  };

  const handleGenderSelect = (gender: any) => {
    setSelectedGender(gender);
  };

  const handleSave = () => {
    navigation.navigate("MatchesPage");
  };

  const addImage = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita que sua aplicação acesse as imagens"
      );
    } else {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        base64: false,
        aspect: [4, 4],
        quality: 1,
      });

      if (canceled) {
        ToastAndroid.show("Operação cancelada", ToastAndroid.SHORT);
      } else {
        setImages([...images, assets[0]?.uri]);
      }
    }
  };

  const deleteImage = (indexToDelete: number) => {
    const updatedImages = images.filter(
      (_: any, index: number) => index !== indexToDelete
    );
    setImages(updatedImages);
  };

  return (
    <View style={styles.container}>
      <GoToHomeButtonContainer style={css({ top: top + 16, zIndex: 9 })}>
        <GoToHomeButton />
      </GoToHomeButtonContainer>
      <ScrollView>
        <StatusBar style="light" />
        <Image style={styles.backgroundHeader} />

        <View style={styles.avatarContainer}>
          <View style={styles.imageIconContainer}>
            <Image
              style={styles.avatar}
              source={{ uri: nerds[0]?.imageUrl }}
              resizeMode="cover"
            />

            <TouchableOpacity style={styles.editIconContainer}>
              <View style={styles.editIconBackground}>
                <AntDesign name="edit" size={24} color="#4B164C" />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>Pedro Giampietro</Text>
          <Text style={styles.age}>29 anos</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.content]}>
            <Text style={styles.label}>Meu nome</Text>
            <View style={styles.valueContainer}>
              <TextInput
                style={styles.input}
                placeholder="Como gostaria que te apresentássemos?"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.label}>Meu aniversário</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <View style={styles.valueContainer}>
                <FontAwesome name="calendar" size={16} color="black" />

                {showDatePicker && (
                  <DateTimePicker
                    value={date}
                    mode={"date"}
                    display="default"
                    onChange={onChange}
                  />
                )}
                <Text>{date.toLocaleDateString()}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.content]}>
            <Text style={styles.label}>Sobre mim</Text>
            <View style={styles.valueTextAreaContainer}>
              <TextInput
                style={styles.textarea}
                placeholder="Conte alguma coisa legal sobre você"
                value={aboutMe}
                onChangeText={setAboutMe}
                multiline
              />
            </View>
          </View>

          <View style={[styles.content, styles.genderContainer]}>
            <Text style={styles.label}>Sexo</Text>
            <View style={styles.buttonGenderContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedGender === "Homem" && styles.buttonActive,
                ]}
                onPress={() => handleGenderSelect("Homem")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedGender === "Homem" && styles.buttonTextActive,
                  ]}
                >
                  Homem
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedGender === "Mulher" && styles.buttonActive,
                ]}
                onPress={() => handleGenderSelect("Mulher")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedGender === "Mulher" && styles.buttonTextActive,
                  ]}
                >
                  Mulher
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedGender === "Outro" && styles.buttonActive,
                ]}
                onPress={() => handleGenderSelect("Outro")}
              >
                <Text
                  style={[
                    styles.buttonText,
                    selectedGender === "Outro" && styles.buttonTextActive,
                  ]}
                >
                  Outro
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.label}>
            Me interesso por pessoas na faixa etaria de:{" "}
          </Text>

          <SliderContainer
            sliderValue={sliderValue}
            onValueChange={setSliderValue}
          >
            <Slider
              animateTransitions
              maximumTrackTintColor="#DD88CF"
              maximumValue={90}
              minimumTrackTintColor="#4B164C"
              minimumValue={18}
              step={1}
              thumbTintColor="#4B164C"
            />
          </SliderContainer>

          <View style={styles.imageSlider}>
            <ScrollView horizontal>
              {images.map((image: any, index: number) => (
                <View key={index}>
                  <Image source={{ uri: image }} style={styles.image} />
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deleteImage(index)}
                  >
                    <Ionicons name="trash-outline" size={24} color="#FFF" />
                  </TouchableOpacity>
                </View>
              ))}
              <TouchableOpacity style={styles.addButton} onPress={addImage}>
                <Ionicons name="add" size={24} color="#4B164C" />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
            <Text style={styles.buttonTextActive}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B164C",
  },
  backgroundHeader: {
    width: "100%",
    height: 50,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 55,
    paddingBottom: 90,
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35,
  },
  label: {
    fontSize: 20,
    color: "#000",
    fontFamily: "roboto-bold",
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  imageIconContainer: {
    position: "relative",
  },
  avatar: {
    width: 177,
    height: 215,
    borderRadius: 10,
    marginBottom: -120,
  },
  editIconContainer: {
    position: "absolute",
    bottom: -110,
    right: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  editIconBackground: {
    backgroundColor: "#FFF",
    width: 32,
    height: 32,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 54,
    backgroundColor: "#ECECEC",
    borderColor: "transparent",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 15,
  },
  textarea: {
    height: 100,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
  },
  valueTextAreaContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#ECECEC",
    justifyContent: "space-between",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    justifyContent: "flex-start",
    top: 110,
    marginTop: 10,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 54,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#ECECEC",
    justifyContent: "space-between",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  genderContainer: {
    marginBottom: 160,
  },
  buttonGenderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: 110,
    marginTop: 20,
    borderColor: "#4B164C",
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonSave: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#4B164C",
    borderWidth: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActive: {
    backgroundColor: "#4B164C",
  },
  buttonText: {
    color: "#4B164C",
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  buttonTextActive: {
    color: "#FFFFFF",
    fontFamily: "roboto-bold",
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontFamily: "roboto-bold",
    color: "#4B164C",
    textAlign: "center",
    top: 120,
  },
  age: {
    fontSize: 20,
    fontFamily: "roboto-medium",
    color: "#4B164C",
    textAlign: "center",
    top: 120,
  },
  imageSlider: {
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  addButton: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#4B164C",
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 15,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    padding: 4,
  },
});

const GoToHomeButtonContainer = styled.View({
  position: "absolute",
  left: 16,
});
