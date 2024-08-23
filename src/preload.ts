import { SystemGeneralInformation } from "./modules/system";

class BuddhiliveSysinfoUI {

  private listItems = ['General', 'System'];
  private appRoot: HTMLDivElement = document.querySelector('#app-root');

  private systemUI = new SystemGeneralInformation(this.appRoot);

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
    
      default:
        break;
    }
  }
}

window.onload = () => {
  new BuddhiliveSysinfoUI().createWindow();
};

