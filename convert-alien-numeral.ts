const convertAlienWordToNumber = (text: string): number => {
  const alienWords: string[] = [...text];
  let result = 0;

  for (let i = 0; i <= alienWords.length; i++) {
    const currentWord = alienWords[i];
    const nextWord = alienWords[i + 1];

    const currentAlienValue = convertWordToNumber(currentWord);
    const nextAlienValue = convertWordToNumber(nextWord);

    if (currentAlienValue < nextAlienValue) {
      const minusValue = nextAlienValue - currentAlienValue;
      result += minusValue;
      i += 1;
      continue;
    }

    result += currentAlienValue;
  }

  return result;
};

const convertWordToNumber = (word: string): number => {
  if (word === "A") {
    return 1;
  }

  if (word === "L") {
    return 50;
  }

  if (word === "B") {
    return 5;
  }

  if (word === "R") {
    return 1000;
  }

  if (word === "C") {
    return 100;
  }

  if (word === "Z") {
    return 10;
  }

  return 0;
};

const case1 = convertAlienWordToNumber("AAA");
const case2 = convertAlienWordToNumber("LBAAA");
const case3 = convertAlienWordToNumber("RCRZCAB");

console.log(case1);
console.log(case2);
console.log(case3);
