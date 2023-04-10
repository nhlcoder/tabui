const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.tab-item');
const panes = $$('.tab-pane');

function lineActive(){
    const Active = $('.tab-item.active');
    const line = $('.line');
    line.style.left = Active.offsetLeft + 'px';
    line.style.width = Active.offsetWidth + 'px';
}
lineActive();

items.forEach((item, index) => {
    const pane = panes[index];
    item.onclick = function(){

        const itemActive = $('.tab-item.active');
        const paneActive = $('.tab-pane.active');

        itemActive.classList.remove('active');
        paneActive.classList.remove('active');

        this.classList.add('active');
        pane.classList.add('active');
        lineActive();
    };
})