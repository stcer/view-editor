import { useState } from 'react'
// import NativeListener from 'react-native-listener'


const getDOMPosition = (target, topDomClassName) => {
  let left = 0
  let top = 0
  let current = target
  do {
    left += current.offsetLeft
    top += current.offsetTop

    if (topDomClassName
      && current.className
      && topDomClassName === current.className
    ) {
      break
    }
    current = current.offsetParent
  } while (current)

  return {
    left: left,
    top: top,
    width: target.offsetWidth,
    height: target.offsetHeight,
  }
}

export const useMouseLayerPosition = function(topDomClassName) {
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
