import { osInfo, versions } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class OSInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        this.appRoot.innerHTML = '';
        // OS Information
        osInfo().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'Operating System Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));

        // Software Version Information
        versions().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'Software Version Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}