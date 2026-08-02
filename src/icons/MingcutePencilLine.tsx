import React, { SVGProps } from "react";

export function MingcutePencilLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from MingCute Icon by MingCute Design - https://github.com/Richard9394/MingCute/blob/main/LICENSE */}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m18.864 8.671l-3.536-3.535M8.964 18.57L20.278 7.257a2 2 0 0 0 0-2.828l-.707-.707a2 2 0 0 0-2.828 0L5.429 15.036l-1.06 4.596z"
      />
    </svg>
  );
}
export default MingcutePencilLine;
