import logo from './logo.svg';
import styles from './App.module.css';
import Greeter from './greeter/greeter';
import Loader from './loader/loader';
import { createEffect, createSignal, Show } from 'solid-js';

function App() {
  const [isLoading, setLoading] = createSignal(true);

  createEffect(() => {
    console.log(`loading indicator ${isLoading()}`);
  });

  return <>
    <div class={styles.App}>
      <Show when={isLoading()}>
        <Loader ></Loader>
      </Show>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <button onClick={(e) => { setLoading(false) }}>Destroy loader</button>
      <Greeter firstName="Madhu" lastName="B" />
      <Greeter firstName="Hello" lastName="World" />
    </div>
  </>
}

export default App;