import "../src/index.css";

const BREAKPOINTS_INT = {
  xs: 480,
  ss: 620,
  sm: 768,
  md: 1060,
  lg: 1200,
  xl: 1700,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], i) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(i + 5) * 10}vh`,
        },
      },
    ];
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [{ name: "dark", value: "#00040f" }],
  },
  viewport: { viewports: customViewports },
};
