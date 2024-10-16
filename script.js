const container = document.querySelector('.container');
const input = document.querySelector('#input');
const btn = document.querySelector('button');
for (let i = 1; i <= 16**2; i++) {
    const div = document.createElement('div');
    div.style.minHeight = 720 / 16 + 'px';
    div.style.minWidth = 720 / 16 + 'px';
    div.classList.add('case');
    div.style.opacity = 0.2;
    container.appendChild(div);
}
const getGrid = input => {
    container.textContent = '';
    let caseWidth = (720 / input) ;
    for (let i = 1; i <= input**2; i++) {
        const div = document.createElement('div');
        div.style.minHeight = caseWidth + 'px';
        div.style.minWidth = caseWidth + 'px';
        div.style.opacity = 0.2;
        div.classList.add('case');
        container.appendChild(div);
    }
}
btn.addEventListener('click', () => {
    const gridNumber = input.value;
    if (gridNumber < 1 || gridNumber > 100 || gridNumber.includes('.')) {
        alert('enter a integer number between 1 et 100');
        return;
    }
    getGrid(gridNumber);
})
container.addEventListener('mouseover', (e) => { 
    e.target.style.backgroundColor = 
`rgba(${Math.floor(Math.random() * 255)},
${Math.floor(Math.random() * 255)},
 ${Math.floor(Math.random() * 255)})`;
 e.target.style.opacity = +e.target.style.opacity < 1 
 ? +e.target.style.opacity + 0.2
 : +e.target.style.opacity
})
