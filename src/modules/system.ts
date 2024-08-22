import { system } from "systeminformation";

export class SystemGeneralInformation {
    constructor(private appRoot: HTMLDivElement) { }

    loadUI() {
        system()
            .then((data) => {
                const listView = document.createElement("ul");
                for (const [key, value] of Object.entries(data)) {
                    const li = document.createElement("li");
                    li.innerHTML = `<span class="sysinfo__list-item__label">${key}</span>: ${value}`;
                    listView.appendChild(li);
                }
                this.appRoot.appendChild(listView);
            })
            .catch((error) => console.error(error));
    }
}