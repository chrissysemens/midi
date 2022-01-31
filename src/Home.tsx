import { useState } from "react";
import styles from "./Home.module.scss";
import { scales } from "./Data/Scales";
import { Arrangement, DrumTrack, Scale, Song } from "./types";
import { useTimer, Timer } from "react-use-precision-timer";
import { randomChoice } from "./Funcions/Utils";
import { plotArrangement } from "./Funcions/Arrangement";
import { createChord, generateChordProgression } from "./Funcions/Scale";

const Home: React.FC = () => {
  const generateBeat = () => {
    const bpm = Math.floor(Math.random() * (160 - 80 + 1) + 80);
    let msPerBeat = 60000 / bpm;
    msPerBeat = Math.ceil(msPerBeat / 10) * 10;

    return { bpm, msPerBeat };
  };

  const generateKicks = () => {};

  const chooseScale = (): Scale => {
    const selectedScale = randomChoice(scales);
    return selectedScale;
  };

  /*const addDrumTrack = () => {
    const drumTrack: DrumTrack = {
      name: "Drums",
      sounds: [
        {
          name: "Kick",
          sound: "Kick",
          pianoKey: { note: "C", octave: 1 },
          beats: [],
        },
        {
          name: "Snare",
          sound: "Snare",
          pianoKey: { note: "D", octave: 1 },
          beats: [],
        },
        {
          name: "Open Hat",
          sound: "Open Hat",
          pianoKey: { note: "E", octave: 1 },
          beats: [],
        },
        {
          name: "Closed Hat",
          sound: "Closed Hat",
          pianoKey: { note: "F", octave: 1 },
          beats: [],
        },
      ],
    };

    arrangement && arrangement.tracks.push(drumTrack);
  };*/

  const generate = () => {
    const { bpm, msPerBeat } = generateBeat();
    const scale = chooseScale();
    const arrangement = plotArrangement();
    const song: Song = {
      tracks: [],
    };

    song.tracks.push({
      name: "Drums",
      channel: "1",
      instrument: "Drums",
      sections: arrangement.sections,
    });

    song.tracks.push({
      name: "Bass",
      channel: "2",
      instrument: "Bass",
      sections: arrangement.sections,
    });

    song.tracks.push({
      name: "Pad",
      channel: "3",
      instrument: "Pad",
      sections: arrangement.sections,
    });

    song.tracks.push({
      name: "Syth",
      channel: "4",
      instrument: "Syth",
      sections: arrangement.sections,
    });

    console.log("song", song);

    /*addDrumTrack();*/
    generateKicks();
    const chordProgression = scale && generateChordProgression(scale);
  };

  /*const timer: Timer = useTimer({
    delay: msPerBeat,
    callback: () => {
      console.log("Boom");
      timer.start();
    },
  });*/

  /*const play = () => {
    timer.start();
  };*/

  return (
    <div className="home">
      <button onClick={() => generate()}>Generate</button>
      <button onClick={() => console.log("play")}>Play</button>
      {/*<Song arrangement={arrangement!} />*/}
      {/*<Details
        bpm={bpm!}
        msPerBeat={msPerBeat!}
        key={scale ? scale.root! : ""}
        chords={scale && scale.chords ? scale.chords : []}
      />*/}
      {/*{bpm && <div>The selected BPM is: {bpm}</div>}
      {msPerBeat && <div>Thats one beat every {msPerBeat} ms</div>}
      {scale && (
        <>
          <div>-----</div>
          <div>The selected Scale is: {scale.name}</div>
          <div>
            Which consists of the chords:
            <ul>
              {scale.chords.map((chord: Chord, i: number) => (
                <li key={i}>{chord.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      {arrangement && (
        <>
          <div>------</div>
          <div>The arrangement looks like: </div>
          {arrangement.sections.map((section: Section) => (
            <>
              <span>{section.name}</span>
              <span> ({section.length} bars) </span>
              <span> | </span>
            </>
          ))}
        </>
          )*/}
    </div>
  );
};

export default Home;
