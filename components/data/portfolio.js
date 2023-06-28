export const projects = [
    {
        id: 1,
        image: '/images/neutral.jpg',
        title: 'Neutral',
        details: "Neutral is a digital agency platform that provides software development services to businesses, focusing on building and maintaining mobile and web applications. The platform has collaborated with 10+ commerce in the Democratic Republic of Congo (DRC).",
        fewDetail :'Neutral is a digital agency...',
        technologies: ['React','Rails', 'Scss', 'Tailwind'],
        live: 'https://neutral.codes/',
        state: 'privet'
    },
    {
        id: 2,
        image: '/images/cars.jpg',
        title: 'LUXURY CARS',
        details: 'This web app allows users to get a list of cars, car details, and helps people who are passionate about all things high-end and the goal is to provide the latest news, compare cars side by side, and information on the most luxurious vehicles on the market.',
        fewDetail :'This web app allows users to get...',
        technologies: ['Nextjs', 'Tailwind', 'API'],
        live: 'https://luxury-cars-mu.vercel.app/',
        source: 'https://github.com/joel-kalema/luxury-cars',
        state: 'public'
    },
    {
        id: 3,
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
        id: 4,
        image: '/images/covid.jpg',
        title: 'COVID-19-Live',
        details: "COVID-19-Live-Now is a mobile web app that can show the list of countries and their live COVID-19 data.",
        fewDetail :'COVID-19-Live-Now is a...',
        technologies: ['React', 'Scss'],
        live: 'https://dev--covid-datas.netlify.app/',
        source: 'https://github.com/joel-kalema/COVID-19-Live-Now',
        state: 'public'
    },
    {
        id: 5,
        image: '/images/math.jpg',
        title: 'Math Magicians',
        details: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
        fewDetail :'Math magicians is a website...',
        technologies: ['React', 'CSS'],
        live: 'https://mathmagiciansjk.netlify.app/',
        source: 'https://github.com/joel-kalema/Math-Magicians',
        state: 'public'
    },
    // {
    //     id: 6,
    //     image: '/images/live.jpg',
    //     title: 'Global-warming',
    //     details: 'This is a responsive website that navigates from the home page to the about page, following mobile first rule.',
    //     fewDetail :'This is a responsive website...',
    //     technologies: ['HTML', 'CSS', 'JavaScript'],
    //     live: 'https://joel-kalema.github.io/Global-warming/',
    //     source: 'https://github.com/joel-kalema/Global-warming',
    //     state: 'public'
    // },
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