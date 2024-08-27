import { mem } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class MemoryInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // Memory Information
        mem().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'CPU Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}