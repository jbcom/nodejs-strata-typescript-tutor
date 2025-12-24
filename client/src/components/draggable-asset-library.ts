// Type definition for assets that can be dragged onto the canvas
export interface DraggableAsset {
  id: string;
  name: string;
  type: string;
  path?: string;
  thumbnail?: string;
  category?: string;
  defaultProperties?: Record<string, any>;
}
