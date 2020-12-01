import { cofd } from "./module/config.js";
import cofdItemSheet from "./module/sheets/cofdItemSheet.js";

Hooks.once("init", function () {
    console.log("CofD | Initialize the Chronicles of Darkness System");

    CONFIG.cofd = cofd;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("cofd", cofdItemSheet, {makeDefault: true});
})