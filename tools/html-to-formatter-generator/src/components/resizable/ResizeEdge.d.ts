/// <reference types="react" />
export interface IDragResizeEdgeProps {
    onDrag?: (pixelsTowardNextElementDragged: number) => void;
    onDragEnd?: (pixelsTowardNextElementDragged: number) => void;
}
/**
 * DragResizeEdge is used for resizing component immediately BEFORE or AFTER
 */
export declare function DragResizeEdge(props: IDragResizeEdgeProps): JSX.Element;
/**
 * Helper function to create callbacks for the BEFORE edge.
 * This heper function applies the correct negative sign to minus from the currentWidth.
 * The sign applied assumes that the callbacks accept `pixelsTowardNextElementDragged`
 * @param currentWidth
 * @param callback
 */
export declare function createBeforeEdgeCallback(currentWidth: number, callback: (newWidth: number) => void): (pixelsTowardNextElementDragged: number) => void;
/**
 * Helper function to create callbacks for the AFTER edge.
 * This heper function applies the correct positive sign to add to the currentWidth.
 * The sign applied assumes that the callbacks accept `pixelsTowardNextElementDragged`
 * @param currentWidth
 * @param callback
 */
export declare function createAfterEdgeCallback(currentWidth: number, callback: (newWidth: number) => void): (pixelsTowardNextElementDragged: number) => void;
