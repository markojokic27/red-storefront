export const Calendar: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
  ...rest
}) => (
  <svg
    {...rest}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.333 3.167A.833.833 0 0 0 2.5 4v9.334c0 .46.373.833.833.833h9.334c.46 0 .833-.373.833-.833V4a.833.833 0 0 0-.833-.833H3.333ZM1.5 4c0-1.012.82-1.833 1.833-1.833h9.334c1.012 0 1.833.82 1.833 1.833v9.334c0 1.012-.82 1.833-1.833 1.833H3.333A1.833 1.833 0 0 1 1.5 13.334V4Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.333 3.167A.833.833 0 0 0 2.5 4v9.334c0 .46.373.833.833.833h9.334c.46 0 .833-.373.833-.833V4a.833.833 0 0 0-.833-.833H3.333ZM1.5 4c0-1.012.82-1.833 1.833-1.833h9.334c1.012 0 1.833.82 1.833 1.833v9.334c0 1.012-.82 1.833-1.833 1.833H3.333A1.833 1.833 0 0 1 1.5 13.334V4Z"
      fill="#898A8D"
    />

    <mask id="b" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.667.833a.5.5 0 0 1 .5.5V4a.5.5 0 1 1-1 0V1.333a.5.5 0 0 1 .5-.5Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.667.833a.5.5 0 0 1 .5.5V4a.5.5 0 1 1-1 0V1.333a.5.5 0 0 1 .5-.5Z"
      fill="#898A8D"
    />
    <path
      d="M12.167 1.333a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2Zm0 2.667V1.333h-2V4h2Zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2ZM9.167 4a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2Zm0-2.667V4h2V1.333h-2Zm1.5-1.5a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Z"
      fill="#000"
      mask="url(#b)"
    />
    <mask id="c" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.333.833a.5.5 0 0 1 .5.5V4a.5.5 0 1 1-1 0V1.333a.5.5 0 0 1 .5-.5Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.333.833a.5.5 0 0 1 .5.5V4a.5.5 0 1 1-1 0V1.333a.5.5 0 0 1 .5-.5Z"
      fill="#898A8D"
    />
    <path
      d="M6.833 1.333a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2Zm0 2.667V1.333h-2V4h2Zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2ZM3.833 4a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2Zm0-2.667V4h2V1.333h-2Zm1.5-1.5a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Z"
      fill="#000"
      mask="url(#c)"
    />
    <mask id="d" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 6.667a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 6.667a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z"
      fill="#898A8D"
    />
    <path
      d="M2 5.167a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Zm12 0H2v2h12v-2Zm1.5 1.5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2Zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2Zm-12 0h12v-2H2v2Zm-1.5-1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2Z"
      fill="#000"
      mask="url(#d)"
    />
  </svg>
);
