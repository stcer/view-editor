import {ComponentType, ReactElement} from "react";

/**
 * Components
 */
declare interface ComponentDataProps {
    value:string|[]
    style:object
    title?:string,
    child?:[]
}

declare interface ComponentData {
    id:number
    type:string
    props:ComponentDataProps
}

declare interface  Component{
    TYPE:string
    ViewEditor:ComponentType
    PropEditor:ComponentType
    create():ComponentData
    appendChild(selfData:ComponentData, child:ComponentData):void
    props:object
    child: Component[]
    icon:string
    name:string
    isContainer:boolean
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
declare function renderComponents(
    data: ComponentData[],
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
