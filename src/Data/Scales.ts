import { ChordPosition, Mode, Note, Scale } from "../types";

export const notes: Array<Note> = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const modes: Array<Mode> = [
  {
    name: "Ionian",
    stepPattern: ["W", "W", "H", "W", "W", "W", "H"],
    scalePattern: ["M", "m", "m", "M", "M", "d"],
  },
];

export const chordPositions: Array<ChordPosition> = [
  {
    position: "I",
    nexts: [
      { choice: "I", weight: 0.1 },
      { choice: "II", weight: 0.1 },
      { choice: "III", weight: 0.1 },
      { choice: "IV", weight: 0.3 },
      { choice: "V", weight: 0.3 },
      { choice: "VI", weight: 0.2 },
      { choice: "VII", weight: 0.1 },
    ],
  },
  {
    position: "II",
    nexts: [
      { choice: "I", weight: 0.1 },
      { choice: "II", weight: 0.1 },
      { choice: "III", weight: 0.1 },
      { choice: "IV", weight: 0.2 },
      { choice: "V", weight: 0.3 },
      { choice: "VI", weight: 0.1 },
      { choice: "VII", weight: 0.1 },
    ],
  },
  {
    position: "III",
    nexts: [
      { choice: "I", weight: 0.1 },
      { choice: "II", weight: 0.1 },
      { choice: "III", weight: 0.1 },
      { choice: "IV", weight: 0.2 },
      { choice: "V", weight: 0.3 },
      { choice: "VI", weight: 0.1 },
      { choice: "VII", weight: 0.1 },
    ],
  },
  {
    position: "IV",
    nexts: [
      { choice: "I", weight: 0.2 },
      { choice: "II", weight: 0.2 },
      { choice: "III", weight: 0.1 },
      { choice: "IV", weight: 0.1 },
      { choice: "V", weight: 0.3 },
      { choice: "VI", weight: 0.1 },
      { choice: "VII", weight: 0.1 },
    ],
  },
  {
    position: "V",
    nexts: [
      { choice: "I", weight: 0.3 },
      { choice: "II", weight: 0.1 },
      { choice: "III", weight: 0.1 },
      { choice: "IV", weight: 0.1 },
      { choice: "V", weight: 0.2 },
      { choice: "VI", weight: 0.2 },
      { choice: "VII", weight: 0.1 },
    ],
  },
  {
    position: "VI",
    nexts: [
      { choice: "I", weight: 0.1 },
      { choice: "II", weight: 0.3 },
      { choice: "III", weight: 0.2 },
      { choice: "IV", weight: 0.2 },
      { choice: "V", weight: 0.3 },
      { choice: "VI", weight: 0.1 },
      { choice: "VII", weight: 0.1 },
    ],
  },
  {
    position: "VII",
    nexts: [
      { choice: "I", weight: 0.3 },
      { choice: "II", weight: 0.1 },
      { choice: "III", weight: 0.3 },
      { choice: "IV", weight: 0.1 },
      { choice: "V", weight: 0.1 },
      { choice: "VI", weight: 0.2 },
      { choice: "VII", weight: 0.1 },
    ],
  },
];

export const scales: Array<Scale> = [
  {
    name: "C Major",
    root: "C",
    mode: "Ionian",
  },
  {
    name: "D Major",
    root: "D",
    mode: "Ionian",
  },
  {
    name: "E Major",
    root: "E",
    mode: "Ionian",
  },
];
