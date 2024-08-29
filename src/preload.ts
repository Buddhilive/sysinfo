import { BatteryInformation } from "./modules/battery-info";
import { CPUInformation } from "./modules/cpu-info";
import { GraphicsInformation } from "./modules/graphics-info";
import { MemoryInformation } from "./modules/memory-info";
import { SystemGeneralInformation } from "./modules/system";

class BuddhiliveSysinfoUI {

  private listItems = ['General', 'CPU', 'Memory', 'Battery', 'Graphics'];
  private appRoot: HTMLDivElement = document.querySelector('#app-root');

  private systemUI = new SystemGeneralInformation(this.appRoot);
  private cpuInfoUI = new CPUInformation(this.appRoot);
  private memInfoUI = new MemoryInformation(this.appRoot);
  private batteryInfoUI = new BatteryInformation(this.appRoot);
  private graphicsInfoUI = new GraphicsInformation(this.appRoot);

  createWindow() {
    const listView: HTMLUListElement = document.querySelector('#app-navbar');

    this.listItems.forEach((item: string) => {
      const listElement = document.createElement('li');
      listElement.classList.add('nav-item');
      const anchorElement = document.createElement('a');
      anchorElement.classList.add('nav-link');
      anchorElement.innerHTML = item;
      anchorElement.setAttribute('data-view', item.toLowerCase());
      anchorElement.addEventListener('click', (evt: MouseEvent) => this.onNavSelected(evt));
      listElement.append(anchorElement);
      listView.append(listElement);
    });

    (listView.childNodes[1].childNodes[0] as HTMLAnchorElement).click();
  }

  onNavSelected(evt: MouseEvent) {
    const selectedNav = (evt.target as HTMLAnchorElement);
    const listItems = document.querySelectorAll('#app-navbar .nav-item .nav-link');
    listItems.forEach(item => item.classList.remove('active'));
    selectedNav.classList.add('active');

    const activeView: string = selectedNav.dataset['view'];
    
    switch (activeView) {
      case 'general':
        this.systemUI.loadUI();
        break;
      
      case 'cpu':
        this.cpuInfoUI.loadUI();
        break;

      case 'memory':
        this.memInfoUI.loadUI();
        break;
      
      case 'battery':
        this.batteryInfoUI.loadUI();
        break;

      case 'graphics':
        this.graphicsInfoUI.loadUI();
        break;
    
      default:
        break;
    }
  }
}

window.onload = () => {
  new BuddhiliveSysinfoUI().createWindow();
};

