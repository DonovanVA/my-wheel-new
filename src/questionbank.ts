export interface question {
  title: string;
  details: string;
  diagram: string[][] | null;
  choices: string[];
  correctIndex: number;
  appendix: string | null;
}
export const questions: question[] = [
  {
    title: "Question 1",
    details: "Solve the equation: 2x\u00B2 + 7 = 0",
    diagram: null,
    choices: [
      "x = ±√(11/2)i",
      "x = ±√(5/2)i",
      "x = ±√(6/2)i",
      "x = ±√(3/2)i",
      "x = ±√(7/2)i",
    ],
    correctIndex: 4,
    appendix: null,
  },
  {
    title: "Question 2",
    details: `There are 3 urinals denoted {U\u2081,U\u2082,U\u2083}, and the corresponding urinals are marked either by 'X' or 'O'.
     The usage of these urinals follow the standard urinal conduct^ 
     Don steps into the toilet, with the scenario below, according to the standard urinal conduct, which urinal should Don occupy first?
    `,
    diagram: [
      ["[ ]", ""],
      ["U\u2081", "X"],
      ["U\u2082", "X"],
      ["U\u2083", "X"],
    ],
    choices: ["U\u2081", "U\u2082", "U\u2083"],
    correctIndex: 2,
    appendix: `^The standard urinal conduct is as follows:\n
    (1) Every O/A must be seperated by a X\n
    (2) Users must choose the urinals in such a way that the maximum number of urinals can be used at once (highest efficacy)\n
    (3) Users must choose the urinal that is as far away as possible from the entrance first\n
    (4) If there are no urinals available, the user must leave immediately\n
    (5) If a urinal is faulty, denoted by F, it cannot be used\n
    (6) Let X' denote a faulty urinal that is unoccupied, X' can be adjacent to both X and O.\n
    (7) Suppose that there is an advesary (A) that desires to break rules (1) - (6) or the urinal becomes faulty, users of the urinal have to make adjustments to their location such that the total minimum distance and minimum number of people has to move maximum convenience\n
    `,
  },

  {
    title: "Question 3",
    details: `Suppose now that U\u2083 is occupied, which one should Don occupy?`,
    diagram: [
      ["[ ]", ""],
      ["U\u2081", "X"],
      ["U\u2082", "X"],
      ["U\u2083", "O"],
    ],
    choices: ["U\u2081", "U\u2082", "U\u2083"],
    correctIndex: 0,
    appendix: `^The standard urinal conduct is as follows:\n
    (1) Every O/A must be seperated by a X\n
    (2) Users must choose the urinals in such a way that the maximum number of urinals can be used at once (highest efficacy)\n
    (3) Users must choose the urinal that is as far away as possible from the entrance first\n
    (4) If there are no urinals available, the user must leave immediately\n
    (5) If a urinal is faulty, denoted by F, it cannot be used\n
    (6) Let X' denote a faulty urinal that is unoccupied, X' can be adjacent to both X and O.\n
    (7) Suppose that there is an advesary (A) that desires to break rules (1) - (6) or the urinal becomes faulty, users of the urinal have to make adjustments to their location such that the total minimum distance and minimum number of people has to move maximum convenience\n
    `,
  },
  {
    title: "Question 4",
    details: "What is the remainder of 78689 divided by 7?",
    diagram: null,
    choices: ["1", "2", "3", "4", "5"],
    correctIndex: 1,
    appendix: null,
  },
  {
    title: "Question 5",
    details: "When did World War 1 end?",
    diagram: null,
    choices: ["1918", "1919", "1920", "1921"],
    correctIndex: 0,
    appendix: null,
  },
  {
    title: "Question 6",
    details: `The diargam below shows a scenario of 8 urinals, now U\u2083 has suddenly broke down while Don was using it, which urinal should he shift to?`,
    diagram: [
      ["[ ]", ""],
      ["U\u2081", "X"],
      ["U\u2082", "X"],
      ["F\u2083", "X"],
      ["U\u2084", "X"],
      ["U\u2085", "X"],
      ["U\u2086", "X"],
      ["U\u2087", "O"],
      ["U\u2088", "X"],
    ],
    choices: ["U\u2081", "U\u2082", "U\u2084", "U\u2085", "U\u2086    "],
    correctIndex: 0,
    appendix: `^The standard urinal conduct is as follows:\n
    (1) Every O/A must be seperated by a X\n
    (2) Users must choose the urinals in such a way that the maximum number of urinals can be used at once (highest efficacy)\n
    (3) Users must choose the urinal that is as far away as possible from the entrance first\n
    (4) If there are no urinals available, the user must leave immediately\n
    (5) If a urinal is faulty, denoted by F, it cannot be used\n
    (6) Let X' denote a faulty urinal that is unoccupied, X' can be adjacent to both X and O.\n
    (7) Suppose that there is an advesary (A) that desires to break rules (1) - (6) or the urinal becomes faulty, users of the urinal have to make adjustments to their location such that the total minimum distance and minimum number of people has to move maximum convenience\n
    `,
  },
  {
    title: "Question 7",
    details: "When did the Qing Dynasty collapse?",
    diagram: null,
    choices: ["Jan 1912", "Feb 1912", "Mar 1912", "Apr 1912", "May 1912"],
    correctIndex: 1,
    appendix: null,
  },
  {
    title: "Question 8",
    details: "What is the deriavative of nlog(n)?",
    diagram: null,
    choices: ["nlog(n) + 1", "log(n) + n", "log(n)", "n", "log(n) + 1"],
    correctIndex: 4,
    appendix: null,
  },
  {
    title: "Question 9",
    details: "When did Alexander the great died?",
    diagram: null,
    choices: ["322 BC", "325 BC", "324 BC", "323 BC", "320 BC"],
    correctIndex: 3,
    appendix: null,
  },
  {
    title: "Question 10",
    details: `U\u2083 has been successfully repaired, however, an advesary, A, decides to take up U\u2082 when U\u2081 is already occupied, what is the correct order of movement by the people using the urinals?`,
    diagram: [
      ["[ ]", ""],
      ["U\u2081", "O"],
      ["U\u2082", "A"],
      ["U\u2083", "X"],
      ["U\u2084", "O"],
      ["U\u2085", "X"],
      ["U\u2086", "X"],
      ["U\u2087", "O"],
      ["U\u2088", "X"],
    ],
    choices: [
      "U\u2087 to U\u2086, U\u2081 to U\u2088",
      "U\u2081 to U\u2086, U\u2087 to U\u2088",
      "U\u2087 to U\u2088, U\u2081 to U\u2086",
      "U\u2087 to U\u2088, U\u2084 to U\u2086,  U\u2081 to U\u2084",
      "U\u2081 to U\u2088, U\u2087 to U\u2086",
    ],
    correctIndex: 2,
    appendix: `^The standard urinal conduct is as follows:\n
    (1) Every O/A must be seperated by a X\n
    (2) Users must choose the urinals in such a way that the maximum number of urinals can be used at once (highest efficacy)\n
    (3) Users must choose the urinal that is as far away as possible from the entrance first\n
    (4) If there are no urinals available, the user must leave immediately\n
    (5) If a urinal is faulty, denoted by F, it cannot be used\n
    (6) Let X' denote a faulty urinal that is unoccupied, X' can be adjacent to both X and O.\n
    (7) Suppose that there is an advesary (A) that desires to break rules (1) - (6) or the urinal becomes faulty, users of the urinal have to make adjustments to their location such that the total minimum distance and minimum number of people has to move maximum convenience\n
    `,
  },
];
