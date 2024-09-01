import { graphics } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class GraphicsInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // Graphics Information
        graphics().then(async (data: any) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableViewControllers = await templateGen.createBasicTableFromArray(data.controllers, 'Graphics Controller Information');
            this.appRoot.appendChild(tableViewControllers);
            const tableViewDisplays = await templateGen.createBasicTableFromArray(data.displays, 'Graphics Displays Information');
            this.appRoot.appendChild(tableViewDisplays);
        }).catch((error) => console.error(error));
    }
}