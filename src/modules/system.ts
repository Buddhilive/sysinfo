import { system, bios, baseboard } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class SystemGeneralInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        // System Information
        system().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'System Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));

        // BIOS Information
        bios().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'BIOS Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));

        // Baseboard Information
        baseboard().then((data) => {
            const templateGen = new SysInfoTemplateGenerator();
            const tableView = templateGen.createBasicTable(data, 'Baseboard Information');
            this.appRoot.appendChild(tableView);
        }).catch((error) => console.error(error));
    }
}