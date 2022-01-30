import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <>
      <main className='App-main'>
        <animated.h1 style={props}>
          I will fade in
        </animated.h1>
      </main>
    </>
  );
}

export default App;
