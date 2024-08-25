import { cpu } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class CPUInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // CPU Information
        cpu().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'CPU Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}