import * as React from "react";
export interface IResizableSplitContainerProps {
    /**
     *
     */
    containerWidth: number;
    /**
     * minimum width of the container
     */
    minWidth?: number;
    /**
     * Standard react component className
     */
    className?: string;
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
    /**
     * embedded content on left
     */
    leftContent?: (width: number) => JSX.Element | null;
    /**
     * embedded content on right
     */
    rightContent?: (width: number) => JSX.Element | null;
}
export declare function ResizableSplitContainer(props: IResizableSplitContainerProps): JSX.Element;
