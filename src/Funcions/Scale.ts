import { Scale, Note, Mode, Chord, ChordPosition } from "../types";
import { modes, notes, chordPositions } from "../Data/Scales";
import { weightedChoice } from "./Utils";

export const getNotesInScale = (scale: Scale): Array<Note> => {
  let scaleNotes = new Array<Note>();
  let position = notes.findIndex((n: Note) => n === scale.root);
  const mode = modes.find((m: Mode) => m.name === scale.mode);

  scaleNotes.push(scale.root);
  for (let index = 0; index < 6; index++) {
    const halfSteps = mode && mode.stepPattern[index] === "W" ? 2 : 1;

    let nextPosition = position + halfSteps;
    const overlap =
      nextPosition > notes.length ? nextPosition - notes.length : 0;
    nextPosition = overlap ? overlap : nextPosition;

    const note = notes[nextPosition];
    scaleNotes.push(note);
    position = nextPosition;
  }
  return scaleNotes;
  console.log(scaleNotes);
};

export const createChord = (
  scale: Scale,
  chordRoot: Note,
  length: number
): Chord => {
  const notesInScale = getNotesInScale(scale);

  const rootPosition = notesInScale.findIndex(
    (note: Note) => note === chordRoot
  );

  const numeral = chordPositions[rootPosition].position;

  const mode = modes.find((mode: Mode) => mode.name === scale.mode);
  const chordType = mode?.scalePattern[rootPosition];

  let thirdPosition = rootPosition + 2;

  const thirdWrap =
    thirdPosition > notesInScale.length - 1
      ? thirdPosition - notesInScale.length
      : thirdPosition;

  let fifthPosition = rootPosition + 4;

  let fifthWrap =
    fifthPosition > notesInScale.length - 1
      ? fifthPosition - notesInScale.length
      : fifthPosition;

  fifthWrap = chordType === "d" ? fifthWrap - 1 : fifthWrap;

  const third = notesInScale[thirdWrap]; // Third
  const fifth = notesInScale[fifthWrap]; // Fifth

  const add7 = weightedChoice([
    { choice: true, weight: 0.2 },
    { choice: false, weight: 0.8 },
  ]);

  let seventh: Note | undefined = undefined;
  if (add7) {
    let seventhPosition = rootPosition + 6;
    const seventhWrap =
      seventhPosition > notesInScale.length - 1
        ? seventhPosition - notesInScale.length
        : seventhPosition;
    seventh = notesInScale[seventhWrap]; // Seventh
  }

  const chord: Chord = {
    name: `${chordRoot} ${
      chordType === "M" ? "Major" : chordType === "m" ? "Minor" : "Diminished"
    } ${add7 ? "7" : ""}`,
    position: numeral,
    type: `${
      chordType === "M" ? "Major" : chordType === "m" ? "Minor" : "Diminished"
    }`,
    root: chordRoot,
    third,
    fifth,
    seventh,
    length: length,
  };

  return chord;
};

export const generateChordProgression = (scale: Scale) => {
  let chordProgression = new Array<Chord>();

  const progressionLength = weightedChoice([
    { choice: 2, weight: 0.1 },
    { choice: 4, weight: 0.4 },
    { choice: 6, weight: 0.05 },
    { choice: 8, weight: 0.3 },
    { choice: 12, weight: 0.075 },
    { choice: 16, weight: 0.075 },
  ]);

  const notesInScale = getNotesInScale(scale);

  const startingNote = weightedChoice<Note>(
    notesInScale.map((note: Note, i: number) => ({
      choice: note,
      weight: i === 0 ? 8 : 0.25,
    }))
  );

  let chord = createChord(scale, startingNote, 4);
  chordProgression.push(chord);
  for (let i = 0; i < progressionLength - 1; i++) {
    const currentPos = chordPositions.find(
      (position: ChordPosition) =>
        chord.position === position.position.toString()
    );

    const nextPosition =
      currentPos && weightedChoice<string>(currentPos?.nexts);
    const index = chordPositions.findIndex(
      (position: ChordPosition) => position.position.toString() === nextPosition
    );

    const nextRoot = notesInScale[index];
    chord = createChord(scale, nextRoot, 4);
    chordProgression.push(chord);
  }
  console.log(chordProgression);
};
