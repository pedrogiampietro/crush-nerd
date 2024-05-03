import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { nerds } from "../nerds/nerds";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Slider } from "@miblanchard/react-native-slider";
import { SliderContainer } from "../shared/components/SliderContainer";

export function ProfilePage() {
  const [selectedGender, setSelectedGender] = React.useState();
  const [sliderValue, setSliderValue] = React.useState([18, 25]);
  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false);
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
});
