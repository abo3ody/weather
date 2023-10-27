import { WeatherDetailType } from "./types";
import { HumidtyIcon, PressureIcon, WindIcon } from "../icons";
import UvIcon from "../icons/UvIcon";

export const weatherDetails: Array<WeatherDetailType> = [
   {
      id: 1,
      icon: <HumidtyIcon />,
      mesureType: "%",
      text: "humidity",
      value: 22,
   },
   {
      id: 2,
      icon: <WindIcon />,
      mesureType: "km/h",
      text: "wind",
      value: 2,
   },
   {
      id: 3,
      icon: <PressureIcon />,
      mesureType: "hPa",
      text: "pressure",
      value: 997,
   },
   {
      id: 4,
      icon: <UvIcon />,
      mesureType: "",
      text: "uv",
      value: 8,
   },
];
