import React from 'react'

export const EmptyContainer = () => {
  return (
    <div className={"emptyContainer"}>请插入内容</div>
  )
}

export default function RenderContainerChild({child, renderNodes}) {
  return (
    <React.Fragment>
    {child instanceof Array &&  child.length > 0
        ? renderNodes(child || [])
        : <EmptyContainer/>
    }
    </React.Fragment>
  )
}
