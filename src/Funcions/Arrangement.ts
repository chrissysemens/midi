import { Arrangement, Section, SectionLength } from "../types";
import { weightedChoice } from "./Utils";

export const plotArrangement = (): Arrangement => {
  const arrangement: Arrangement = {
    sections:[]
  };

  // Create Intro
  const hasIntro = weightedChoice<boolean>([
    { choice: true, weight: 0.8 },
    { choice: false, weight: 0.2 },
  ]);

  let intro: Section;
  if (hasIntro) {
    const introLength = weightedChoice<SectionLength>([
      { choice: 4, weight: 0.25 },
      { choice: 8, weight: 0.5 },
      { choice: 12, weight: 0.25 },
    ]);

    intro = { name: "Intro", type: "Intro", length: introLength };
    arrangement.sections.push(intro);
  }

  // Create First Verse
  const firstVerseLength = weightedChoice<SectionLength>([
    { choice: 4, weight: 0.25 },
    { choice: 8, weight: 0.5 },
    { choice: 12, weight: 0.25 },
  ]);

  const firstVerse: Section = {
    name: "First Verse",
    type: "Verse",
    length: firstVerseLength,
  };
  arrangement.sections.push(firstVerse);

  // Create First Chorus
  const firstChorusLength = weightedChoice<SectionLength>([
    { choice: 4, weight: 0.25 },
    { choice: 8, weight: 0.5 },
    { choice: 12, weight: 0.25 },
  ]);

  const firstChorus: Section = {
    name: "Chorus",
    type: "Chorus",
    length: firstChorusLength,
  };
  arrangement.sections.push(firstChorus);

  // Create Second Verse
  const secondVerseLength = weightedChoice<SectionLength>([
    { choice: 4, weight: 0.25 },
    { choice: 8, weight: 0.5 },
    { choice: 12, weight: 0.25 },
  ]);

  const secondVerse: Section = {
    name: "Second Verse",
    type: "Verse",
    length: secondVerseLength,
  };
  arrangement.sections.push(secondVerse);

  // Create Second Chorus
  const secondChorusLength = weightedChoice<SectionLength>([
    { choice: 4, weight: 0.25 },
    { choice: 8, weight: 0.5 },
    { choice: 12, weight: 0.25 },
  ]);

  const secondChorus: Section = {
    name: "Chorus",
    type: "Chorus",
    length: secondChorusLength,
  };
  arrangement.sections.push(secondChorus);

  // Create Bridge
  const hasBridge = weightedChoice<boolean>([
    { choice: true, weight: 0.7 },
    { choice: false, weight: 0.3 },
  ]);

  let bridge: Section;
  if (hasBridge) {
    const bridgeLength = weightedChoice<SectionLength>([
      { choice: 4, weight: 0.45 },
      { choice: 8, weight: 0.45 },
      { choice: 12, weight: 0.1 },
    ]);

    bridge = { name: "Bridge", type: "Intro", length: bridgeLength };
    arrangement.sections.push(bridge);
  }

  // Create Final Chorus
  const hasFinalChorus = weightedChoice<boolean>([
    { choice: true, weight: 0.65 },
    { choice: false, weight: 0.35 },
  ]);

  let finalChorus: Section;
  if (hasFinalChorus) {
    const finalChorusLength = weightedChoice<SectionLength>([
      { choice: 4, weight: 0.2 },
      { choice: 8, weight: 0.5 },
      { choice: 12, weight: 0.3 },
    ]);

    finalChorus = {
      name: "Final Chours",
      type: "Chorus",
      length: finalChorusLength,
    };
    arrangement.sections.push(finalChorus);

    return arrangement;
  }

  // Create Outro
  let outro: Section;

  const hasOutro = weightedChoice<boolean>([
    { choice: true, weight: 0.65 },
    { choice: false, weight: 0.35 },
  ]);

  if (hasOutro) {
    const outroLength = weightedChoice<SectionLength>([
      { choice: 4, weight: 0.45 },
      { choice: 8, weight: 0.45 },
      { choice: 12, weight: 0.1 },
    ]);

    outro = {
      name: "Outro",
      type: "Outro",
      length: outroLength,
    };
    arrangement.sections.push(outro);
  }

  return arrangement;
};
