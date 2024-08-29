import { graphics } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class GraphicsInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // Graphics Information
        graphics().then((data: any) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data.controllers[0], 'Graphics Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}