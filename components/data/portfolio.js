export const projects = [
    {
        id: 1,
        image: '/images/neutral.jpg',
        title: 'Neutral',
        details: 'Neutral is your expert design and development partner. We bring digital products from validation to success and teach you how because we care. It’s time to move beyond simply building features and start designing the right product with the right strategy.',
        fewDetail :'neutral is your expert design...',
        technologies: ['React','Rails', 'Scss'],
        live: 'https://neutral.codes/',
        state: 'privet'
    },
    {
        id: 2,
        image: '/images/livemovi1.jpg',
        title: 'SHOWNET',
        details: 'A movie database website that displays all the information about a show including the discription and the rating of the show. You can search for a show, like and also comment on any of your favourite show. This project consumed TVmaze api.',
        fewDetail :'A movie database website that...',
        technologies: ['HTML', 'CSS', 'Js'],
        live: 'https://tylher.github.io/Javascript-capstone/',
        source: 'https://github.com/tylher/Javascript-capstone',
        state: 'public'
    },
    {
        id: 3,
        image: '/images/covid.jpg',
        title: 'COVID-19-Live',
        details: "The coronavirus COVID-19 is affecting 228 countries and territories. The day is reset after midnight GMT+0. The list of countries and their regional classification is based on the United Nations Geoscheme. Sources are provided under Latest News. Learn more about Worldometer's COVID-19 data",
        fewDetail :'The coronavirus COVID-19 is...',
        technologies: ['React', 'Scss'],
        live: 'https://dev--covid-datas.netlify.app/',
        source: 'https://github.com/joel-kalema/COVID-19-Live-Now',
        state: 'public'
    },
    {
        id: 4,
        image: '/images/todo.jpg',
        title: 'To-Do-list',
        details: 'The To_Do_List is a project designed to help you get organized, achieve your goals and never forget a thing. By keeping record of your plans and allowing you to edit them the way you want.',
        fewDetail :'The To_Do_List is a project...',
        technologies: ['HTML', 'CSS', 'Js', 'Webpack'],
        live: 'https://joel-kalema.github.io/To-Do-list/',
        source: 'https://github.com/joel-kalema/To-Do-list',
        state: 'public'
    },
    {
        id: 5,
        image: '/images/live.jpg',
        title: 'Global-warming',
        details: 'This is a responsive website that navigates from the home page to the about page, following mobile first rule.',
        fewDetail :'This is a responsive website...',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        live: 'https://joel-kalema.github.io/Global-warming/',
        source: 'https://github.com/joel-kalema/Global-warming',
        state: 'public'
    },
    {
        id: 6,
        image: '/images/recipe.jpg',
        title: 'Recipe App',
        details: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have . Also, allow you to make them public so anyone can access them.',
        fewDetail :'The Recipe app keeps track of...',
        technologies: ['Rails', 'PostgreSQL'],
        live: 'https://github.com/joel-kalema/Recipe_app',
        source: 'https://github.com/joel-kalema/Recipe_app',
        state: 'public'
    }
];

const getProject = (name) => {
    const formattedName = name.split('_').join(' ');
    const project = projects.find(project => project.title === formattedName);
    return project;
};

export default getProject;