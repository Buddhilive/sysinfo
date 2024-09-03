import { osInfo } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class OSInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // Battery Information
        osInfo().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'Operating System Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}