const DARK = "#151E2C";
const LIGHT = "#FFFFFF";

function channel(value: number) {
  const v = value / 255;
  return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

// Relative luminance per WCAG 2.x, or null if the value isn't a hex color
function luminance(hex: string) {
  const raw = hex.trim().replace("#", "");
  const full =
    raw.length === 3
      ? raw
          .split("")
          .map((c) => c + c)
          .join("")
      : raw;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;

  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a: number, b: number) {
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/**
 * Picks whichever of white or the site's dark text color has the higher
 * contrast on the given background, so text stays readable whatever brand
 * color a project uses.
 */
export function readableTextColor(background: string) {
  const bg = luminance(background);
  const light = luminance(LIGHT);
  const dark = luminance(DARK);
  if (bg === null || light === null || dark === null) return LIGHT;

  return contrast(bg, light) >= contrast(bg, dark) ? LIGHT : DARK;
}
