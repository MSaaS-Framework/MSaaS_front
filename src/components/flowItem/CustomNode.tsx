import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { CustomNodeProps } from '../../types'
import AUTH from "./images/auth.png";


function CustomNode({ data, type }: CustomNodeProps) {
  console.log(type)
  switch (type) {
    case "image":
      return (
        <div className="px-4 py-4 shadow-md bg-white border-2 border-stone-400 rounded-full ">
          <div className="flex justify-center items-center">
            {/* <img src={"./images/auth.png"} alt="Auth" className="w-16 h-16" /> */}
          </div>

          <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
          <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
        </div>
      )
    default:
      return (
        <div className="px-4 py-4 w-40 shadow-md bg-white border-2 border-teal-500 rounded-full ">
          <div className="flex">
            <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
              {data.emoji}
            </div>
            <div className="ml-2">
              <div className="text-lg font-bold">{data.name}</div>
            </div>
          </div>

          <Handle type="target" position={Position.Top} id="top-target" className="w-2 !bg-teal-500" />
          <Handle type="target" position={Position.Right} id="right-target" className="h-2 !bg-teal-500" />
          <Handle type="target" position={Position.Bottom} id="bottom-target" className="w-2 !bg-teal-500" />
          <Handle type="target" position={Position.Left} id="left-target" className="h-2 !bg-teal-500" />

          <Handle type="source" position={Position.Top} id="top-source" className="w-2 !bg-teal-500" />
          <Handle type="source" position={Position.Right} id="right-source" className="h-2 !bg-teal-500" />
          <Handle type="source" position={Position.Bottom} id="bottom-source" className="w-2 !bg-teal-500" />
          <Handle type="source" position={Position.Left} id="left-source" className="h-2 !bg-teal-500" />
        </div>
      );
  }
}

export default memo(CustomNode);
