export const CreditCard: React.FC<React.ComponentPropsWithoutRef<'svg'>> = ({
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
        d="M2.666 3.833a.833.833 0 0 0-.833.833v6.667c0 .46.373.833.833.833h10.667c.46 0 .833-.373.833-.833V4.666a.833.833 0 0 0-.833-.833H2.666Zm-1.833.833c0-1.012.82-1.833 1.833-1.833h10.667c1.012 0 1.833.82 1.833 1.833v6.667c0 1.012-.82 1.833-1.833 1.833H2.666a1.833 1.833 0 0 1-1.833-1.833V4.666Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.666 3.833a.833.833 0 0 0-.833.833v6.667c0 .46.373.833.833.833h10.667c.46 0 .833-.373.833-.833V4.666a.833.833 0 0 0-.833-.833H2.666Zm-1.833.833c0-1.012.82-1.833 1.833-1.833h10.667c1.012 0 1.833.82 1.833 1.833v6.667c0 1.012-.82 1.833-1.833 1.833H2.666a1.833 1.833 0 0 1-1.833-1.833V4.666Z"
      fill="#898A8D"
    />
    <path
      d="M2.833 4.666a.167.167 0 0 1-.167.167v-2c-1.012 0-1.833.82-1.833 1.833h2Zm0 6.667V4.666h-2v6.667h2Zm-.167-.167c.092 0 .167.075.167.167h-2c0 1.012.82 1.833 1.833 1.833v-2Zm10.667 0H2.666v2h10.667v-2Zm-.167.167c0-.092.075-.167.167-.167v2c1.012 0 1.833-.82 1.833-1.833h-2Zm0-6.667v6.667h2V4.666h-2Zm.167.167a.167.167 0 0 1-.167-.167h2c0-1.012-.82-1.833-1.833-1.833v2Zm-10.667 0h10.667v-2H2.666v2Zm0-3A2.833 2.833 0 0 0-.167 4.666h2c0-.46.373-.833.833-.833v-2Zm10.667 0H2.666v2h10.667v-2Zm2.833 2.833a2.833 2.833 0 0 0-2.833-2.833v2c.46 0 .833.373.833.833h2Zm0 6.667V4.666h-2v6.667h2Zm-2.833 2.833a2.833 2.833 0 0 0 2.833-2.833h-2c0 .46-.373.833-.833.833v2Zm-10.667 0h10.667v-2H2.666v2Zm-2.833-2.833a2.833 2.833 0 0 0 2.833 2.833v-2a.833.833 0 0 1-.833-.833h-2Zm0-6.667v6.667h2V4.666h-2Z"
      fill="#050505"
      mask="url(#a)"
    />
    <mask id="b" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.833 6.667a.5.5 0 0 1 .5-.5h13.333a.5.5 0 1 1 0 1H1.333a.5.5 0 0 1-.5-.5Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.833 6.667a.5.5 0 0 1 .5-.5h13.333a.5.5 0 1 1 0 1H1.333a.5.5 0 0 1-.5-.5Z"
      fill="#898A8D"
    />
    <path
      d="M1.333 5.167a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Zm13.333 0H1.333v2h13.333v-2Zm1.5 1.5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2Zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2Zm-13.333 0h13.333v-2H1.333v2Zm-1.5-1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5h-2Z"
      fill="#050505"
      mask="url(#b)"
    />
  </svg>
);
