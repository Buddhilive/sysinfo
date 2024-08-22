class BuddhiliveSysinfoUI {

  private listItems = ['General', 'System'];

  createWindow() {
    const listView: HTMLUListElement = document.querySelector('#app-navbar');

    this.listItems.forEach((item: string) => {
      const listElement = document.createElement('li');
      listElement.classList.add('nav-item');
      const anchorElement = document.createElement('a');
      anchorElement.classList.add('nav-link');
      anchorElement.innerHTML = item;
      anchorElement.addEventListener('click', (evt: MouseEvent) => this.onNavSelected(evt));
      listElement.append(anchorElement);
      listView.append(listElement);
    });
  }

  onNavSelected(evt: MouseEvent) {
    const selectedNav = (evt.target as HTMLAnchorElement);
    const listItems = document.querySelectorAll('#app-navbar .nav-item .nav-link');
    listItems.forEach(item => item.classList.remove('active'));
    selectedNav.classList.add('active');
  }
}

window.onload = () => {
  new BuddhiliveSysinfoUI().createWindow();
};

