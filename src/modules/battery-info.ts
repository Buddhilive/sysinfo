import { battery } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class BatteryInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // Battery Information
        battery().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'Battery Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}