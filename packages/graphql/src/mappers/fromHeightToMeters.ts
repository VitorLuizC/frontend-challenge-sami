const CENTIMETER_REGEX = /^(\d+) cm$/;

/**
 * Transform a textual value with centimeters to meters.
 * @param height - A tuple with ft'in and cm height.
 */
const fromHeightToMeters = ([, text]: [string, string]) => {
  const [matched, cms] = CENTIMETER_REGEX.exec(text) ?? [];
  if (!matched) return null;
  return parseFloat(cms) / 100;
};

export default fromHeightToMeters;
