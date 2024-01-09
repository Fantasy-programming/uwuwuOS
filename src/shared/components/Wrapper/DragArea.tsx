import React, { useMemo, Fragment } from 'react'
import { useDroppable, DndContext, DragEndEvent } from '@dnd-kit/core'
import { useGetSensors } from '@hooks/useGetSensors'
import { useIconStore } from '@stores/iconStore'
import useIcon from '@hooks/useIcon'

import Style from './DragArea.module.scss'

interface GridProps {
  rows: number[]
  cols: number[]
}

const DragArea: React.FC = () => {
  const sensors = useGetSensors()
  const moveIcon = useIconStore(state => state.moveIcon)

  // over = place, active = curren icon
  function handleDragEnd({ over, active }: DragEndEvent) {
    if (!over) return
    moveIcon(active.id.toString(), over.id.toString())
  }

  const rows = useMemo(() => Array.from({ length: 18 }, (_, i) => i), [])
  const cols = useMemo(() => Array.from({ length: 7 }, (_, i) => i), [])

  return (
    <main className="Frame">
      <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
        <Grid rows={rows} cols={cols} />
      </DndContext>
    </main>
  )
}

const Grid: React.FC<GridProps> = ({ rows, cols }) => {
  return (
    <div className={Style.dragArea}>
      {cols.map((_, colIndex) => (
        <Fragment key={`row-${colIndex}`}>
          {rows.map((_, rowIndex) => {
            return (
              <Place
                key={`${rowIndex}-${colIndex}`}
                position={`${rowIndex}-${colIndex}`}
              />
            )
          })}
        </Fragment>
      ))}
    </div>
  )
}

const Place: React.FC<{ position: string }> = ({ position }) => {
  const IconComponent = useIcon(position)
  const { setNodeRef } = useDroppable({ id: position })

  return (
    <div ref={setNodeRef} className={Style.place}>
      <IconComponent />
    </div>
  )
}

export default DragArea
