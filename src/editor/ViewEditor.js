import React, { useState } from 'react'
import { getDOMPosition, useComponents, useActiveComponent, renderComponentView } from '../inc'
import ViewEditLayer from './ViewEditLayer'

const useMouseLayerPosition = function(topDomClassName) {
  const [isOnLayer, setOnLayer] = useState(false)
  const [position, setPosition] = useState({left: 0, top:0, width: 0, height:0});

  const onMouseOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOnLayer(true)
    setPosition(getDOMPosition(e.target, topDomClassName))
  }

  const onMouseOut = (e) => {
    e.stopPropagation()
    setOnLayer(false)
  }

  return {
    isOnLayer,
    position,
    handler : {
      onMouseOver,
      onMouseOut,
    }
  }
}

const topDomClassName = 'components';

/**
 * show all component
 * @returns {*}
 * @constructor
 */
const ViewEditor = function ({data}) {
  const {active, setActive} = useActiveComponent()
  const {findComponentByType} = useComponents();

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
