import { useState } from 'react'
// import NativeListener from 'react-native-listener'

const getDOMPosition = (target, topDomClassName, sizeDomClassName) => {
  let left = 0
  let top = 0
  let current = target
  let sizeTarget = target
  while (current) {
    if (sizeDomClassName
      && current.className
      && sizeDomClassName === current.className
    ) {
      sizeTarget = current;
      break
    }
    current = current.parentNode
  }

  while (current) {
    left += current.offsetLeft
    top += current.offsetTop

    if (topDomClassName
      && current.className
      && topDomClassName === current.className
    ) {
      break
    }
    current = current.offsetParent
  }

  return {
    left: left,
    top: top,
    width: sizeTarget.offsetWidth,
    height: sizeTarget.offsetHeight,
  }
}

export const useMouseLayerPosition = function (topDomClassName, sizeDomClassName) {
  const [isOnLayer, setOnLayer] = useState(false)
  const [position, setPosition] = useState({ left: 0, top: 0, width: 0, height: 0 })

  const onMouseOver = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOnLayer(true)
    setPosition(getDOMPosition(e.target, topDomClassName, sizeDomClassName))
  }

  const onMouseOut = (e) => {
    e.stopPropagation()
    setOnLayer(false)
  }

  return {
    isOnLayer,
    position,
    handler: {
      onMouseOver,
      onMouseOut,
    }
  }
}
