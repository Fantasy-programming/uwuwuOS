import { useSensor, MouseSensor, useSensors } from '@dnd-kit/core';

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
