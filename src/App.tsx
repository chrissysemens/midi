import { useState } from "react";
import {WebMidi} from "webmidi";
import Home from "./Home";

function App() {
  const [output, setOutput] = useState<any>();


  WebMidi.enable()
    .then(() => WebMidi.outputs.forEach((output: any) => {output._midiOutput.name === 'Chrissy Midi Bus 1' && setOutput(output)}))
    .catch(err => console.log(err));


  return (
    <div className="App">
      <Home output={output}/>
    </div>
  );
}

export default App;