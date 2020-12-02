export default class cofdItemSheet extends ItemSheet {
    
    get template() {
        return `systems/cofd/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.cofd;

        return data;
    }
}