import { Dimensions } from "react-native";
import { app } from "@app/constants";
const { standardWidth, standardHeight, smallHeight } = app;
const { height, width } = Dimensions.get("window");

export const getDimensionsWidth = value => {
  return (value / standardWidth) * width;
};

export const getDimensionsHeight = value => {
  return (value / standardHeight) * height;
};

export const isSmallScreen = () => {
  return height <= smallHeight;
};
