export class SysInfoTemplateGenerator {
    createBasicTable(data: object, title?: string): HTMLTableElement {
        const tableView = document.createElement("table");
        tableView.classList.add('table', 'mb-5');

        if (title && title != '') {
            const tableTitleTemplate = `<thead>
        <tr><td colspan="2"><h3>${title}</h3></td></thead>`;
            tableView.innerHTML = tableTitleTemplate;
        }

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

    createBasicTableFromArray(data: Array<object>, title?: string): Promise<HTMLDivElement> {
        return new Promise((resolve, reject) => {
            const tableCollection = document.createElement('div');
            for (const item of data) {
                const tableView = this.createBasicTable(item, title);
                tableCollection.appendChild(tableView);
            }
            resolve(tableCollection);
        });
    }
}