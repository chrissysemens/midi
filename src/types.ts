export type Note =
  | "C"
  | "C#"
  | "Db"
  | "D"
  | "D#"
  | "E#"
  | "E"
  | "F"
  | "F#"
  | "Gb"
  | "G"
  | "G#"
  | "Ab"
  | "A"
  | "A#"
  | "Bb"
  | "B";

export type Step = "W" | "H";

export type NoteType = "M" | "m" | "d";

export type PianoKey = {
  octave: number;
  note: Note;
};

export type ModeName =
  | "Ionian"
  | "Aeolian"
  | "Dorian"
  | "Phrygian"
  | "Lydian"
  | "Mixolydian"
  | "Locrian";

export type Mode = {
  name: ModeName;
  stepPattern: Array<Step>;
  scalePattern: Array<NoteType>;
};

export type Scale = {
  name: string;
  root: Note;
  mode: ModeName;
};

export type Chord = {
  name: string;
  position: string;
  type: ChordType;
  root: Note;
  third: Note;
  fifth: Note;
  seventh?: Note;
  ninth?: Note;
  length: number;
};

export type ChordPosition = {
  position: string;
  nexts: Array<WeightedChoice<string>>;
};

export type Section = {
  name: string;
  type: SectionType;
  length: number;
};


export type Bar = {
  beats: Array<Beat>
}
export type Arrangement = {
  sections: Array<Section>;
};

export type Song = {
  tracks: Array<Track>
}

export type Track = {
  name: string;
  instrument: string;
  channel: string;
  sections: Array<Section>;
};

export type Midi = {
  start: number;
  end: number;
  notes: Array<MidiNote>;
};

export type MidiNote = {
  note: Note;
  velocity: number;
};

export type SectionType = "Intro" | "Verse" | "Chorus" | "Bridge" | "Outro";

export type SectionLength = 0 | 2 | 4 | 6 | 8 | 12 | 16;

export type ChordType = "Major" | "Minor" | "Diminished";

export type WeightedChoice<T> = {
  choice: T;
  weight: number;
};

export type DrumTrack = {
  name: string;
  sounds: Array<DrumChannel>;
};

export type DrumSound = "Kick" | "Snare" | "Open Hat" | "Closed Hat" | "Tom";

export type DrumChannel = {
  name: string;
  sound: DrumSound;
  pianoKey: PianoKey;
  beats: Array<Beat>;
};

export type Beat = {
  start: number;
  notes: Array<Note>;
  length: number;
  velocity: number;
};
