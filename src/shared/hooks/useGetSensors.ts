import { useSensor, useSensors } from "@dnd-kit/core";
import { MouseSensor } from "@utils/hackSensors";

export const useGetSensors = () => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );
  return sensors;
};
