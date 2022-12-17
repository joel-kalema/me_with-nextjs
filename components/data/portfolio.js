export const projects = [
    {
        id: 1,
        image: '/images/live.jpg',
        title: 'Global-warming',
        details: 'This is a responsive website that navigates from the home page to the about page, following mobile first rule.',
        fewDetail :'This is a responsive website...',
        technologies: ['Html', 'Css', 'Js'],
        live: '#'
    },
    {
        id: 2,
        image: '/images/todo.jpg',
        title: 'To-Do-list',
        details: 'The To_Do_List is a project designed to help you get organized, achieve your goals and never forget a thing. By keeping record of your plans and allowing you to edit them the way you want.',
        fewDetail :'The To_Do_List is a project...',
        technologies: ['Htlm', 'Css', 'js', 'Webpack'],
        live: '#'
    },
    {
        id: 3,
        image: '/images/livemovi1.jpg',
        title: 'SHOWNET',
        details: 'A movie database website that displays all the information about a show including the discription and the rating of the show. You can search for a show, like and also comment on any of your favourite show. This project consumed TVmaze api.',
        fewDetail :'A movie database website that...',
        technologies: ['Js', 'Htlm', 'Css'],
        live: '#'
    },
    {
        id: 4,
        image: '/images/live.jpg',
        title: 'this is the title',
        details: 'this project was made to help people',
        fewDetail :'this project was made to help...',
        technologies: ['React', 'Scss'],
        live: '#'
    },
    {
        id: 5,
        image: '/images/live.jpg',
        title: 'this is the title',
        details: 'this project was made to help people',
        fewDetail :'this project was made to help...',
        technologies: ['React', 'Scss'],
        live: '#'
    },
    {
        id: 6,
        image: '/images/live.jpg',
        title: 'this is the title',
        details: 'this project was made to help people',
        fewDetail :'this project was made to help...',
        technologies: ['React', 'Scss'],
        live: '#'
    }
];

const getProject = (name) => {
    const formattedName = name.split('_').join(' ');
    const project = projects.find(project => project.title === formattedName);
    return project;
};

export default getProject;