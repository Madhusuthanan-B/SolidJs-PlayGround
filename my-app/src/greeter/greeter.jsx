import { createSignal, onMount } from 'solid-js';
import styles from './greeter.module.css';

function Greeter(props) {
    const [firstName, setFirstName] = createSignal(props.firstName);
    const [lastName, setLastname] = createSignal(props.lastName);
    const greet = () => `${firstName()} ${lastName()}`;

    onMount(() => {
        console.log({ props });
    });

    return (
        <div class={styles.form}>
            <p>
                {greet()}
            </p>
            <input value={firstName()} onInput={e => setFirstName(e.target.value)} />
            <input value={lastName()} onInput={e => setLastname(e.target.value)} />
        </div>
    );

}
export default Greeter;