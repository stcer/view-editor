import {ReactDOM, ReactElement} from "react";

/**
 * Components
 */
declare interface  Component{
    components: []
    ViewEditor:ReactDOM
    PropEditor:ReactDOM
    TYPE:string
    NAME:string
    DefProps:object
    isContainer:boolean
}

declare interface ComponentDataProps {
    value:string|[]
    style:object
    title?:string
}

declare interface ComponentData {
    id:number
    type:string
    props:ComponentDataProps
    child:ComponentData[]
}

declare interface MapFunc {
    (item: any): any;
}

declare interface FindComponent {
    (type:string): Component;
}

declare interface ComponentsContext{
    components: []
    findComponentByType:FindComponent
    map(callback:MapFunc): any
}

declare function useComponentsContextValue(components: []): ComponentsContext
declare function useComponentContext(): ComponentsContext

/**
 * ActiveComponent
 */
declare interface ActiveComponentContext {
    active: ComponentData
    setActive(object):boolean
}

declare function useActiveContext(): ActiveComponentContext
declare function useActiveContextValue(): ActiveComponentContext

/**
 * dom tool
 */
declare function renderComponentView(
    item: ComponentData,
    comMaker:FindComponent,
    mouseHandler:object,
    active: ComponentData
): ReactElement

declare interface MousePosition {
    left: number
    top: number
    width: number
    height: number
}

declare interface MouseHandleFunc {
    (e:any):any
}

declare interface MouseHandle {
    onMouseOver:MouseHandleFunc
    onMouseOut:MouseHandleFunc
}

declare interface MouseState {
    isOnLayer:boolean
    position: MousePosition
    handler:MouseHandle
}

declare function useMouseLayerPosition(topDomClassName: string):MouseState
