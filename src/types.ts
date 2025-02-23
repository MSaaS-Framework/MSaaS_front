export interface CustomNodeItem {
  id: string
  type: string
  data: CustomNodeData
  position: { x: number, y: number },
}

export interface CustomNodeData {
  name: string;
  job: string;
  emoji: string;
}

export interface CustomNodeProps {
  data: CustomNodeData;
  type: string;
}