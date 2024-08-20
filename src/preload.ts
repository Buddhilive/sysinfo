import { system } from "systeminformation";

window.onload = () => {
    createWindow();
};

function createWindow() {
    const appRoot: HTMLDivElement = document.querySelector("#app-root");
    
    system()
      .then((data) => {
        const listView = document.createElement("ul");
        for (const [key, value] of Object.entries(data)) {
          const li = document.createElement("li");
          li.innerHTML = `<span class="sysinfo__list-item__label">${key}</span>: ${value}`;
          listView.appendChild(li);
        }
        appRoot.appendChild(listView);
      })
      .catch((error) => console.error(error));
}

