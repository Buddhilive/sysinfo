import { system, bios } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class SystemGeneralInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        system()
            .then((data) => {
                const templateGen = new SysInfoTemplateGenerator();
                const tableView = templateGen.createBasicTable(data, 'System Information');
                this.appRoot.appendChild(tableView);
            })
            .catch((error) => console.error(error));

        bios()
            .then((data) => {
                const templateGen = new SysInfoTemplateGenerator();
                const tableView = templateGen.createBasicTable(data, 'BIOS Information');
                this.appRoot.appendChild(tableView);
            })
            .catch((error) => console.error(error));
    }
}