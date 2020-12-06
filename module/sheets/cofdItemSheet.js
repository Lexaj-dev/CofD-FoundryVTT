export default class cofdItemSheet extends ItemSheet {
    
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530, 
            height: 340,
            classes: ["cofd", "sheet", "item"] 
        })
    }

    get template() {
        return `systems/cofd/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.cofd;

        return data;
    }
}