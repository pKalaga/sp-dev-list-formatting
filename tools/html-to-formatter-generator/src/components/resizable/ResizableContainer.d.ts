import * as React from "react";
export interface IResizableContainerProps {
    /**
     * Specifies if the BEFORE edge of the component is draggable
     */
    isBeforeEdgeDraggable?: boolean;
    /**
     * Specify if the AFTER edge of the component is draggable
     */
    isAfterEdgeDraggable?: boolean;
    /**
     * The initial width of the container
     */
    initialWidth: number;
    /**
     * minimum width of the container
     */
    minWidth?: number;
    /**
     * Standard react component className
     */
    className?: string;
    /**
     * The child `renderProp` you would like to wrap
     */
    children?: (width: number) => JSX.Element;
    /**
     * `setContainerStyle` allows you to set the style of the ResizableContainer based on the current width
     */
    setContainerStyle?: (width: number) => React.CSSProperties;
    /**
     * Callback when either edge of the container is being dragged
     */
    onDrag?: (width: number) => void;
    /**
     * Callback when either edge was dragged. This is a good place to save the latest width
     */
    onDragEnd?: (width: number) => void;
}
/**
 * Container that you can wrap your component in to resize its width.
 * This component can resize both the BEFORE and AFTER border (edge).
 * The BEFORE edge refers to the edge between your component and the previous element.
 * The AFTER edge refers to the edge between your component and the element after.
 * @param props IResizableContainerProps
 */
export declare function ResizableContainer(props: IResizableContainerProps): JSX.Element;
