import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Slider } from "@miblanchard/react-native-slider";

export function SliderContainer(props) {
  const { caption, sliderValue, trackMarks } = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE
  );
  let renderTrackMarkComponent;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
    renderTrackMarkComponent = (index) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style = currentMarkValue > Math.max(currentSliderValue);
      // ? trackMarkStyles.activeMark
      // : trackMarkStyles.inactiveMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text>{Array.isArray(value) ? value.join(" - ") : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
}

const styles = StyleSheet.create({});
