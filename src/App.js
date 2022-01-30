import logo from './logo.svg';
import './App.css';
import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <>
      <main className='App-main'>
        <animated.div style={props}>
          <h1>I will fade in</h1>
        </animated.div>
      </main>
    </>
  );
}

export default App;
