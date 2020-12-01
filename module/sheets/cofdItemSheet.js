export default class cofdItemSheet extends ItemSheet {
    get template(){
        return `systems/cofd/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}