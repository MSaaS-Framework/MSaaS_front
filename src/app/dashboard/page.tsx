"use client"

import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Connection,
  Edge,
  Node,
  MarkerType
} from '@xyflow/react';

import '@xyflow/react/dist/base.css';
import CustomNode from '../../components/flowItem/CustomNode';
import type { CustomNodeItem } from '../../types'

const nodeTypes = {
  custom: CustomNode,
};
const initNodes: CustomNodeItem[] = [
  {
    id: '1',
    type: 'custom',
    data: { name: 'API Gateway', job: 'CEO', emoji: '📁' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    type: 'custom',
    data: { name: 'Orders API', job: 'Designer', emoji: '📁' },
    position: { x: 0, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { name: 'Partners API', job: 'Developer', emoji: '📁' },
    position: { x: 100, y: 400 },
  },
  {
    id: '4',
    type: 'custom',
    data: { name: 'Partners Service', job: 'Developer', emoji: '📁' },
    position: { x: 500, y: 400 },
  },
  {
    id: '5',
    type: 'custom',
    data: { name: 'Orders Service', job: 'Developer', emoji: '📁' },
    position: { x: 600, y: 200 },
  },
  {
    id: '6',
    type: 'custom',
    data: { name: 'Gateway Service', job: 'Developer', emoji: '📁' },
    position: { x: 600, y: 0 },
  },
  {
    id: '7',
    type: 'custom',
    data: { name: 'Notifications Service', job: 'Developer', emoji: '📁' },
    position: { x: 500, y: -200 },
  },
  {
    id: '8',
    type: 'custom',
    data: { name: 'Notifications API', job: 'Developer', emoji: '📁' },
    position: { x: 100, y: -200 },
  },
  {
    id: '9',
    type: 'custom',
    data: { name: 'Queue API', job: '', emoji: '📁' },
    position: { x: 300, y: 100 },
  },
];

const initEdges: Edge[] = [
  {
    id: 'e1-6',
    source: '1',
    target: '6',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    animated: true,
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    animated: true,
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    animated: true,
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
  },
  {
    id: 'e8-7',
    source: '8',
    target: '7',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FF0072',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FF0072',
    },
    animated: true,
    sourceHandle: 'right-source',
    targetHandle: 'left-target',
  },
  {
    id: 'e6-2',
    source: '6',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#7BFFFF',
    },
    style: {
      strokeWidth: 2,
      stroke: '#7BFFFF',
    },
    animated: true,
    sourceHandle: 'bottom-source',
    targetHandle: 'right-target',
  },
  {
    id: 'e6-9',
    source: '6',
    target: '9',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFF4F',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFF4F',
    },
    animated: true,
    sourceHandle: 'left-source',
    targetHandle: 'right-target',
  },
  {
    id: 'e5-9',
    source: '5',
    target: '9',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFF4F',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFF4F',
    },
    animated: true,
    sourceHandle: 'left-source',
    targetHandle: 'right-target',
  },
  {
    id: 'e4-9',
    source: '4',
    target: '9',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFF4F',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFF4F',
    },
    animated: true,
    sourceHandle: 'top-source',
    targetHandle: 'right-target',
  },
  {
    id: 'e9-8',
    source: '9',
    target: '8',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFF4F',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFF4F',
    },
    animated: true,
    sourceHandle: 'left-source',
    targetHandle: 'bottom-target',
  },
  {
    id: 'e9-2',
    source: '9',
    target: '2',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFF4F',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFF4F',
    },
    animated: true,
    sourceHandle: 'left-source',
    targetHandle: 'top-target',
  },
  {
    id: 'e9-3',
    source: '9',
    target: '3',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: '#FFFF4F',
    },
    style: {
      strokeWidth: 2,
      stroke: '#FFFF4F',
    },
    animated: true,
    sourceHandle: 'left-source',
    targetHandle: 'top-target',
  },
];

export default function Dashboard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-gray-800">MSaaS</h2>
      <div style={{ width: '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={{ backgroundColor: '#17141D' }} // 스타일 직접 적용
        >
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
