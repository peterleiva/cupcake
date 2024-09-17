export function sleep(ms = 2_000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
