import { useSensor, useSensors } from '@dnd-kit/core'
import { MouseSensor, TouchSensor } from '@utils/hackSensors'

export const useGetSensors = () => {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
  )
  return sensors
}
