export const textClamp = (text: string, numberOfChars: number) => {
  return text.substring(0, numberOfChars) + "...";
};
