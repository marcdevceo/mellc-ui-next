export const textColor = {
  primary: 'text-[#E2E8F0]',        // Cool Slate (light gray-blue)
  secondary: 'text-[#38BDF8]',      // Sky Blue (energetic but not childish)
  accent: 'text-[#F59E0B]',         // Amber (highlight without being too soft)
  neutral: 'text-gray-300',         // Standard readable body text
  success: 'text-emerald-400',
  danger: 'text-rose-400',
};

export const bgColor = {
  none: 'bg-transparent',
  primary: 'bg-[#1E3A8A]',          // Indigo-900 (Button/CTA - deep, rich)
  secondary: 'bg-[#334155]',        // Slate-700 (optional usage)
  accent: 'bg-[#1F2937]',           // Gray-800 (Card background - bold but not flat black)
  neutral: 'bg-[#000000]',          // Page background
  surface: 'bg-[#111827]',          // Alternate section or container bg
  success: 'bg-emerald-100',
  warning: 'bg-yellow-100',
  danger: 'bg-rose-100',
};

export const borderColor = {
  primary: 'border-[#1E3A8A]',
  secondary: 'border-[#334155]',
  accent: 'border-[#F59E0B]',
  neutral: 'border-[#2E2E2E]',
  danger: 'border-rose-500',
};

export const variantClasses = {
  primary: `${bgColor.primary} ${textColor.primary} hover:bg-[#1C3375]`,
  secondary: `${bgColor.secondary} ${textColor.primary} hover:bg-[#2D3C4D]`,
  accent: `${bgColor.accent} ${textColor.primary} hover:bg-[#374151]`,
  neutral: `${bgColor.neutral} ${textColor.secondary} hover:bg-neutral/70`,
  success: `${bgColor.success} ${textColor.neutral} hover:bg-success/70`,
  warning: `${bgColor.warning} ${textColor.neutral} hover:bg-warning/70`,
  danger: `${bgColor.danger} ${textColor.neutral} hover:bg-danger/70`,
  ghost: `bg-transparent ${textColor.secondary} hover:bg-gray-100`,
};




