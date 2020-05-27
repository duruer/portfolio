import jquery from "jquery";
import Popper from "popper.js";
import "bootstrap";

window.jQuery = window.jquery = window.$ = jquery;
window.Popper = Popper;

import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;
