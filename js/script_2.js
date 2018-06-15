'use strict';

var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
	},
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
	},
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
	},
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
	},
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
	},
];

data.forEach(function (box) {
    //console.log(box); - wyświetli wszystkie obiekty tablicy
    var boxEl = document.createElement('div');
    //console.log(boxEl); - wyświetli stworzone divy
    boxEl.id = box.id;
    //console.log(box.id);
    boxEl.innerHTML = "<header>" + box.title + "</header>" + box.content;
    //console.log(box.title, box.content);
    box.categories.forEach(function (item) {
        //console.log(item);
        boxEl.classList.add(item);
    });
    document.getElementById('container').appendChild(boxEl);
});
