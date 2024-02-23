export const hexToRgb = (hex: string): string => {
    // Remove the hash if it exists
    const cleanedHex = hex.replace(/^#/, '');

    // Parse the cleaned hex value to separate RGB components
    const bigint = parseInt(cleanedHex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Return the RGB format
    return `rgb(${r}, ${g}, ${b})`;
  };

  export const rgbToHex = (r: number, g: number, b: number): string => {
    // Ensure the RGB components are within the valid range (0 to 255)
    const validR = Math.min(255, Math.max(0, r));
    const validG = Math.min(255, Math.max(0, g));
    const validB = Math.min(255, Math.max(0, b));

    // Convert the RGB components to hex and concatenate them
    const hexR = validR.toString(16).padStart(2, '0');
    const hexG = validG.toString(16).padStart(2, '0');
    const hexB = validB.toString(16).padStart(2, '0');

    // Return the hex color value
    return `#${hexR}${hexG}${hexB}`;
  };

  export const hexToRGBA = (hex: string): [number, number, number, number] => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) throw new Error("trying to convert color with incorrect format")

    const [, r, g, b] = match.map((component) => parseInt(component, 16));
    return [r, g, b, 255];
  }
