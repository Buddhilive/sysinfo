export class SysInfoTemplateGenerator {
    createBasicTable(data: object): HTMLTableElement {
        const tableView = document.createElement("table");
        tableView.classList.add('table');
        const tbody = document.createElement("tbody");
        for (const [key, value] of Object.entries(data)) {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td><span class="sysinfo__list-item__label">${key}</span></td>
                    <td>${value}</td>`;
            tbody.append(tr);
        }
        tableView.appendChild(tbody);
        return tableView;
    }
}