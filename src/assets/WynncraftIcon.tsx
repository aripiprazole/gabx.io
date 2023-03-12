import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & {
  size: any;
};

function WynncraftIcon(props: Props) {
  const {size, ...svgProps} = props;
  // prettier-ignore
  return (
    <svg
      width={size ?? '28px'}
      height={size ?? '28px'}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
    >
      <path
        d="M6.5 3L1.5 8L7 19.5L5 23.5H8.5L10.5 26L13 21L17.5 24.5L20 22.5L21.5 12L25.5 8L20 7.5L16.5 16L15 13.5L10.5 16L6.5 3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WynncraftIcon;
