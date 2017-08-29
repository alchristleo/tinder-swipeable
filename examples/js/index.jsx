/*global require*/
var React = require('react'),
    ReactDOM = require('react-dom'),
    Tinderable = require('../../lib/tinderable.js');

var cardsData = [
    {
        title: '',
        text: '',
        image: 'portrait-1.jpg',
        id: '1'
    },
    {
        title: '',
        text: '',
        image: 'portrait-2.jpg',
        id: '2'
    },
    {
        title: '',
        text: '',
        image: 'portrait-6.jpg',
        id: '3'
    },
    {
        title: '',
        text: '',
        image: 'portrait-5.jpg',
        id: '4'
    },
    {
        title: '',
        text: '',
        image: 'portrait-4.jpg',
        id: '5'
    },
    {
        title: '',
        text: '',
        image: 'portrait-3.jpg',
        id: '6'
    }

];

ReactDOM.render(
    <Tinderable initialCardsData={cardsData} />,
    document.getElementById('master-root')
);
