const container = document.querySelector('.container');
const input = document.querySelector('#input');
const btn = document.querySelector('button');
const getGrid = input => {
    container.textContent = '';
    let caseWidth = (360 / input) - 1 ;
    for (let i = 1; i <= input**2; i++) {
        const div = document.createElement('div');
        div.style.minHeight = caseWidth + 'px';
        div.style.maxHeight = 'none';
        div.style.minWidth = caseWidth + 'px';
        /* div.style.height = '32.333px'; */
        div.classList.add('case');
        container.appendChild(div);
    }
}
btn.addEventListener('click', () => {
    const gridNumber = input.value;
    getGrid(gridNumber);
})