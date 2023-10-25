/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
/* export function sleep(seconds = 1) {
    return new Promise<void>(resolve => setTimeout(resolve, seconds * 1000));
} */

export function sleep(ms: number): void {
    const start = Date.now();
    let now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}

export function asyncLoop(executor: (...data: any[]) => any, seconds = 1) {
    let stop = false;

    (async () => {
        while (!stop) {
            const result = executor();

            if (result instanceof Promise) await result;

            await sleep(seconds);
        }
    })();

    return () => (stop = true);
}