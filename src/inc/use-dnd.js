import { useDrop } from 'react-dnd'
import { useComponentContext } from './index'

export const DNDItem = {
  type: 'comBox'
}

export const useComponentDrop = (item) => {
  const { changeParent, addChildFromComponent } = useComponentContext()
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: DNDItem.type,
    drop (dragInfo, monitor) {
      const { item: target } = dragInfo
      const didDrop = monitor.didDrop()
      if (didDrop) {
        return
      }

      console.log('DROP', target, 'to', item)

      if(target.id && item.id !== target.id) {
        changeParent(item, target)
      } else if(target.component) {
        addChildFromComponent(item, target.component)
      }
    },

    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    })
  })
  return [{isOver, isOverCurrent}, drop];
}
