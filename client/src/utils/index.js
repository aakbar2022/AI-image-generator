import { surprisePromp } from "../Constants";

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surprisePromp.length);
  const randomPrompt = surprisePromp[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
};
