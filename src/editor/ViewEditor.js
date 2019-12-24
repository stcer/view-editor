import React from 'react'
import { useComponentContext, useActiveContext, renderComponentView, useMouseLayerPosition } from '../inc'
import ViewEditLayer from './ViewEditLayer'

const topDomClassName = 'components';

/**
 * show all component
 * @returns {*}
 * @constructor
 */
const ViewEditor = function ({data}) {
  const {active, setActive} = useActiveContext()
  const {findComponentByType} = useComponentContext();

  // edit layer
  const {isOnLayer, position, handler} = useMouseLayerPosition(topDomClassName)

  handler.onClick = (item, e) => {
    setActive(item)
  }

  return (
    <div className={'viewEditor'}>
      <div className={topDomClassName} style={{position: 'relative'}}>
      {data.map((item) => {
        return renderComponentView(
          item,
          findComponentByType,
          handler,
          active
        )
      })}
      </div>
      <ViewEditLayer
        isShow={isOnLayer}
        position={position}
        activeCom={active} />
    </div>
  )
}

export default ViewEditor
