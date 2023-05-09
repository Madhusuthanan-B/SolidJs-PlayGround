import { onCleanup, onMount } from 'solid-js';
import styles from './loader.module.css';

function Loader() {

    onMount(() => {
        console.log('Loader loaded');
    });

    onCleanup(() => {
        console.log(`Loader cleanup`);
    });

    return (
        <>
            <div class={styles.loader}>
                Loading..
            </div>
        </>
    );
}
export default Loader;