import { Chord } from "../../types";
import styles from "./Details.module.scss";

type DetailsProps = {
  bpm: number;
  msPerBeat: number;
  key: string;
  chords: Array<Chord>;
};

const Details: React.FC<DetailsProps> = ({ bpm, msPerBeat, key, chords }) => {
  return (
    <div className={styles.details}>
      <div className={styles.bpm}>Bpm: {bpm}</div>
      <div className={styles.key}>In the key of {key}</div>
      <div className={styles.chords}>
        {chords.map((c) => (
          <span>{c.root}</span>
        ))}
      </div>
    </div>
  );
};

export { Details };
