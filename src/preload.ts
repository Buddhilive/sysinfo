import { cpu } from "systeminformation";

cpu()
    .then(data => {
        const element = document.querySelector('#element');
        element.innerHTML = data.brand;
    })
    .catch(error => console.error(error));
