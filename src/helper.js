export function formatStat(value, type) {
  if (type !== 'em') {
    return `${Math.round(value * 100 * 10) / 10}%`;
  }

  return Math.round(value);
}

export const numberFormat = Intl.NumberFormat('en', {
  maximumFractionDigits: 1,
  minimumFractionDigits: 0,
});
