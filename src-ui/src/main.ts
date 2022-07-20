import { invoke } from "@tauri-apps/api";
const $ = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", async function() {
    // get the elements
    const helloEl = $("div.hello")! as HTMLElement;
    let counterButtonEl = $("counter-button") as HTMLElement;
    let counterResultEl = $("counter-result") as HTMLElement;


    // counter button click
    counterButtonEl.addEventListener("pointerup", async function() {
        const result = await invoke("add_count", { num: 3 })
        counterResultEl.textContent = result;
    });


    // hello click
    helloEl.addEventListener("pointerup", async function() {
        const result = await invoke("hello_world") as string;
        helloEl.textContent = result;
        setTimeout(function() {
            helloEl.textContent = "Click again";
        }, 1000);
    });
});

