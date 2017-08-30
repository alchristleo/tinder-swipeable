/*global require*/
var React = require('react'),
    ReactDOM = require('react-dom'),
    Tinderable = require('../../lib/tinderable.js');

var cardsData = [
    {
        title: 'TITLE',
        text: 'TEXT',
        image: 'portrait-1.jpg',
        id: '1'
    },
    {
        title: 'TITLE',
        text: 'TEXT',
        image: 'portrait-2.jpg',
        id: '2'
    },
    {
        title: 'TITLE',
        text: 'TEXT',
        image: 'portrait-3.jpg',
        id: '3'
    },
    {
        title: 'TITLE',
        text: 'TEXT',
        image: 'portrait-4.jpg',
        id: '4'
    },
    {
        title: 'TITLE',
        text: 'TEXT',
        image: 'portrait-5.jpg',
        id: '5'
    },
    {
        title: 'TITLE',
        text: 'TEXT',
        image: 'portrait-6.jpg',
        id: '6'
    }
];

ReactDOM.render(
    <Tinderable initialCardsData={cardsData} />,
    document.getElementById('master-root')
);
