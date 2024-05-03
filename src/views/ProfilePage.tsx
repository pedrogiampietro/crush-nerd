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
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { nerds } from "../nerds/nerds";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Slider } from "@miblanchard/react-native-slider";
import { SliderContainer } from "../shared/components/SliderContainer";
import * as ImagePicker from "expo-image-picker";

export function ProfilePage() {
  const [selectedGender, setSelectedGender] = React.useState();
  const [sliderValue, setSliderValue] = React.useState([18, 25]);
  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [images, setImages] = React.useState<any>([]);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false);
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

  const deleteImage = (indexToDelete) => {
    const updatedImages = images.filter((_, index) => index !== indexToDelete);
    setImages(updatedImages);
  };

  return (
    <View style={styles.container}>
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
        <View style={[styles.row, styles.birthdayContainer]}>
          <Text style={styles.label}>Meu aniversário</Text>
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <FontAwesome name="calendar" size={16} color="black" />
            </TouchableOpacity>
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
        </View>

        <View style={[styles.row, styles.genderContainer]}>
          <Text style={styles.label}>Eu me considero</Text>
          <View style={styles.genderPickerContainer}>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue) => setSelectedGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Homem" value="Homem" />
              <Picker.Item label="Mulher" value="Mulher" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
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
            {images.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
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
      </View>
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
    paddingHorizontal: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35,
  },
  label: {
    fontSize: 16,
    color: "#000",
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
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 110,
    marginTop: 40,
  },
  birthdayContainer: {
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 154,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    justifyContent: "space-between",
    borderRadius: 5,
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
    alignItems: "center",
    marginBottom: 160,
  },
  genderPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 154,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    width: 150,
    height: 40,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    fontFamily: "roboto-bold",
    color: "#DD88CF",
    textAlign: "center",
    top: 140,
  },
  age: {
    fontSize: 20,
    fontFamily: "roboto-medium",
    color: "#DD88CF",
    textAlign: "center",
    top: 140,
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
