export const assert = (condition: unknown, message: string) => {
  if (!condition) {
    throw new Error(`❌ Assertion failed: ${message}`);
  }
  console.log("✅ Assertion passed:", message);
};
