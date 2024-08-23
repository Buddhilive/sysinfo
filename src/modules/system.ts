import { system } from "systeminformation";
import { SysInfoTemplateGenerator } from "./template-generator";

export class SystemGeneralInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        system()
            .then((data) => {
                const templateGen = new SysInfoTemplateGenerator();
                const tableView = templateGen.createBasicTable(data);
                this.appRoot.appendChild(tableView);
            })
            .catch((error) => console.error(error));
    }
}