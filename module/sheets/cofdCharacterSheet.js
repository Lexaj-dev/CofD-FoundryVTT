export default class cofdCharacterSheet extends ActorSheet {
    
    static get defaultOptions() {
        return mergeObject(super.defaultOptions,{
            classes: ["cofd", "sheet", "character"],
            template: "systems/cofd/templates/sheets/character-sheet.html",
            width: 600,
            height: 600,
            tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "skills"}],
            scrollY: [".skills", ".traits", ".combat", ".equipment", ".details"]
        });
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.cofd;
        return data;
    }
}