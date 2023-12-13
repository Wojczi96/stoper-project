import { useEffect, useState } from "react";
import DisplayTime from "./components/DisplayTime/DisplayTime";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";

const App = () => {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(null);

  const startStoper = () => {
    setRun(true);
  }
  const stopStoper = () => {
    setRun(false);
  }
  const restartStoper = () => {
    setTime(0);
  }

  useEffect(() => {
    if(run){
      const timer = setInterval(() => {
        setTime(time => time + 10)
      }, 10);
      return () => {
        if(timer) {
          clearInterval(timer);
        }
      }
    }
  }, [run])

  return (
    <Container>
      <DisplayTime time={time}/>
      <Button action={startStoper}>Start</Button>
      <Button action={stopStoper}>Stop</Button>
      <Button action={restartStoper}>Restart</Button>
    </Container>
  );
};

export default App;


