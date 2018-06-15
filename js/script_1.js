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

for (var i = 0; i < data.length; i++) {
    var boxEl = document.createElement('div');
    boxEl.innerHTML = "<header>" + data[i].title + "</header>" + data[i].content;
    boxEl.id = data[i].id; // dodanie ID na div
    boxEl.className = data[i].categories.join(" "); // dodanie class na div
    document.getElementById('container').appendChild(boxEl);
}
