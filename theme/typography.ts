export const fontSize = {
  // Semantic keys
  title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  subtitle: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  body: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  caption: 'text-xs sm:text-sm',
  buttonText: 'text-sm sm:text-base md:text-lg',
  overline: 'text-[10px] sm:text-xs tracking-widest uppercase',
  display: 'text-4xl sm:text-5xl md:text-6xl',

  // Utility fallback (for specific scaling needs)
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
  xl: 'text-2xl',
  xxl: 'text-3xl',
  xxxl: 'text-4xl',
  '4xl': 'text-5xl',
  '5xl': 'text-6xl',
  '6xl': 'text-7xl',
};

export const textAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export const fontWeight = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
};

export const fontFamily = {
  heading: 'font-heading', // Poppins, defined in tailwind.config.ts
  sans: 'font-sans',       // Inter, default body font
  mono: 'font-mono',       // Fira Code, monospace for code blocks
};

