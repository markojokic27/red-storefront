export const Package: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  color,
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75 9.25a.5.5 0 0 0-.5.5V19c0 .464.184.91.513 1.237l.353-.353-.353.353A1.75 1.75 0 0 0 5 20.75h14A1.75 1.75 0 0 0 20.75 19V9.75a.5.5 0 0 0-.5-.5H3.75Zm-.341 11.341-.354.354.354-.354A2.25 2.25 0 0 1 2.75 19V9A.25.25 0 0 1 3 8.75h18a.25.25 0 0 1 .25.25v10A2.25 2.25 0 0 1 19 21.25H5a2.25 2.25 0 0 1-1.591-.659Z"
      stroke="#050505"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.674 4.211h0a1.75 1.75 0 0 1 1.565-.961h0v.5-.5h9.088a.497.497 0 0 1-.067-.246V3l-.002-.25H7.241h0s0 0 0 0 0 0 0 0h0s0 0 0 0h-.001s0 0 0 0L5.674 4.211Zm0 0v.002h0-.001l-2.45 4.899a.25.25 0 0 1-.447-.224l2.45-4.9.001-.001A2.25 2.25 0 0 1 7.24 2.75L5.674 4.211ZM7.74 2.25h8.514H7.74Zm0 0v.001a.5.5 0 0 1-.497.499s0 0 0 0h-.002s0 0 0 0l.499-.5ZM19.23 3.763l-.447.225a2.25 2.25 0 0 0-1.523-1.185V3c0 .11-.036.212-.096.294a1.749 1.749 0 0 1 1.172.917m.894-.448L16.76 3.5v.25m2.47.013-.447.225h0l.447-.225Zm-.894.448-.446.225.446-.226h0Zm0 0v.002l.002.002 2.438 4.896a.25.25 0 1 0 .448-.222l-2.44-4.898.447-.225 2.44 4.9a.75.75 0 1 1-1.342.668L17.89 4.438v-.002a1.25 1.25 0 0 0-1.125-.686h-.005m0 0H7.24l9.518-.25.002.25Z"
      stroke="#050505"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2.75a.25.25 0 0 1 .25.25v6a.25.25 0 1 1-.5 0V3a.25.25 0 0 1 .25-.25Z"
      stroke="#050505"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
