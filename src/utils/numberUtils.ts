export const safeParseFloat = (value: string, defaultValue = 0): number => {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? defaultValue : parsed;
};
