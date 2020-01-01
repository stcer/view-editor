import {ComponentType, ReactElement} from "react";

/**
 * Components
 */
declare interface ComponentDataPropsOptions {
    value?: string | []
    style?: object
    title?: string,
    child?: Component[]
}

declare interface ComponentData {
    id: number
    type: string
    props: ComponentDataPropsOptions
}

declare interface Component {
    TYPE: string
    icon: string
    name: string
    props: ComponentDataPropsOptions
    ViewEditor: ComponentType
    PropEditor: ComponentType

    create(): ComponentData

    appendChild(selfData: ComponentData, child: ComponentData): void
}

declare interface MapFunc {
    (item: any): any;
}

declare interface FindComponent {
    (type: string): Component;
}

declare interface ComponentsContext {
    components: []
    findComponentByType: FindComponent

    map(callback: MapFunc): any,

    addChild(parent: ComponentData, newItem: ComponentData): void,

    addChildFromProps(parent: ComponentData, type: string, props: ComponentDataPropsOptions): void,

    addChildFromComponent(parent: ComponentData, component: Component, props?: ComponentDataPropsOptions): void,
}

declare function useComponentsContextValue(components: []): ComponentsContext

declare function useComponentContext(): ComponentsContext

/**
 * ActiveComponent
 */
declare interface ActiveComponentContext {
    active: ComponentData
    setActive(object): boolean
}

declare function useActiveContext(): ActiveComponentContext

declare function useActiveContextValue(): ActiveComponentContext

/**
 * dom tool
 */
declare interface MousePosition {
    left: number
    top: number
    width: number
    height: number
}

declare interface MouseHandleFunc {
    (e: any): any
}

declare interface MouseHandle {
    onMouseOver: MouseHandleFunc
    onMouseOut: MouseHandleFunc
}

declare interface MouseState {
    isOnLayer: boolean
    position: MousePosition
    handler: MouseHandle
}

declare function useMouseLayerPosition(
    topDomClassName: string,
    sizeTargetClassName: string
): MouseState

declare function fixArrayLength(arr: [], length: number, fillItem: any): []
declare function fixNumberRange(n: number, min: number, max: number): number
declare function useComponentDrop(item: ComponentData): object

declare namespace DNDItem {
    const type:string
}
