import { graphics } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class GraphicsInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // Graphics Information
        graphics().then((data: any) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableViewControllers = templateGen.createBasicTable(data.controllers[0], 'Graphics Controller Information');
            this.appRoot.appendChild(tableViewControllers);
            const tableViewDisplays = templateGen.createBasicTable(data.displays[0], 'Graphics Displays Information');
            this.appRoot.appendChild(tableViewDisplays);
        }).catch((error) => console.error(error));
    }
}