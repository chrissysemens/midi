import { Arrangement, Section, Track } from "../../types";
import styles from "./Song.module.scss";

export type SongProps = {
  arrangement: Arrangement;
};

const Song: React.FC<SongProps> = ({ arrangement }) => {
  return <div className={styles.song}></div>;
};

export { Song };
