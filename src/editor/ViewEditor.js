import React, { useState } from 'react'
import { getDOMPosition } from '../inc'
import ViewEditLayer from './ViewEditLayer'
import { renderComponentView } from './index'

const useMouseLayerPosition = function(topDomClassName) {

  const [isOnLayer, setOnLayer] = useState(false)
  const [position, setPosition] = useState({left: 0, top:0, width: 0, height:0});

  const handleMouseOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOnLayer(true)
    setPosition(getDOMPosition(e.target, topDomClassName))
  }

  const handleMouseOut = (e) => {
    e.stopPropagation()
    setOnLayer(false)
  }

  return {
    isOnLayer,
    position,
    handler : {
      handleMouseOver,
      handleMouseOut,
    }
  }
}

const topDomClassName = 'components';

/**
 * @param data
 * @param components
 * @param stateActiveComponent
 * @returns {*}
 * @constructor
 */
const ViewEditor = function ({ components, data, stateActiveComponent}) {
  // show all component
  const {isOnLayer, position, handler} = useMouseLayerPosition(topDomClassName)
  const [activeComponent, setActiveComponent] = stateActiveComponent

  handler.handleClick = (item, e) => {
    setActiveComponent(item)
  }

  return (
    <div className={'viewEditor'}>
      <div className={topDomClassName} style={{position: 'relative'}}>
      {data.map((item) => {
        return renderComponentView(
          item,
          components.findComponentByType,
          handler,
          activeComponent
        )
      })}
      </div>
      <ViewEditLayer
        isShow={isOnLayer}
        position={position}
        activeCom={activeComponent} />
    </div>
  )
}

export default ViewEditor
