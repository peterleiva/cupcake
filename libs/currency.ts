export function formatCurrency(
  value: number,
  locates: Intl.LocalesArgument = 'pt-br',
  currency = 'BRL',
): string {
  const formatter = new Intl.NumberFormat(locates, {
    style: 'currency',
    currency,
  });

  return formatter.format(value);
}
