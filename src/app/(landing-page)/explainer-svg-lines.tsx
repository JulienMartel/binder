function LeftLine() {
  return (
    <svg viewBox="0 0 316 234" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 3H27.2364C71.2 3.24353 130.957 3.00005 159.127 60.7173C186.584 116.973 246.303 117.217 289.891 116.973H313M3 231H27.2364C71.2 230.756 130.957 231 159.127 173.283C186.584 117.027 246.303 116.783 289.891 117.027H313"
        className="stroke-current stroke-[3px]"
        strokeLinecap="round"
        strokeDasharray="10 10"
      />
    </svg>
  );
}

function RightLine() {
  return (
    <svg
      color="inherit"
      viewBox="0 0 316 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3H313"
        className="stroke-current stroke-[3px]"
        strokeLinecap="round"
        strokeDasharray="10 10"
      />
    </svg>
  );
}

export { LeftLine, RightLine };
