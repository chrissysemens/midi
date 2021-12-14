type HomeProps = {
  output: any
}
const Home: React.FC<HomeProps> = ({output})  => {
  console.log('in home', output);


  const play = () => {
      output.playNote('C2', 1, {duration: 500, velocity: 0.5})
  }
  return (
    <div className="Home">
       <button onClick={() => play()}>Start</button>
    </div>
  );
}

export default Home;