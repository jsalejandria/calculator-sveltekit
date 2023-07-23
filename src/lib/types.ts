export const operations = ["÷", "x", "+", "-"] as const;
export type Operation = (typeof operations)[number];

export const digits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
] as const;
export type Digit = (typeof digits)[number];

export interface Calculator {
  previousOperand: string | null;
  currentOperand: string | null;
  operation: Operation | null;
  overwrite: boolean;
}
