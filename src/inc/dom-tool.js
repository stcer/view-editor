
const getDOMPosition = (target, topDomClassName) => {
  let current = target.offsetParent
  let actualLeft = target.offsetLeft
  let actualTop = target.offsetTop

  while (current !== null) {
    actualLeft += current.offsetLeft
    actualTop += current.offsetTop

    if (topDomClassName
      && current.className
      && topDomClassName === current.className
    ) {
      break;
    }

    current = current.offsetParent
  }

  return {
    left: actualLeft,
    top: actualTop,
    width: target.offsetWidth,
    height: target.offsetHeight,
  }
}

export {
  getDOMPosition
}
