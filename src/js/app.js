import moment from 'moment';
import quotes from 'inspirational-quotes';

class App {

    constructor() {
        this.name = 'app';
        this.user = {
            city: null,
            country: null,
        };
        this.state = {
            panel: 'inactive'
        };
        this.elements = {
            page: {
                body: document.querySelector('.page'),
            },
            time: {
                time: document.querySelector('.clock__time .time__time'),
                timezone: document.querySelector('.clock__time .time__timezone')
            },
            location: {
                city: document.querySelector('.clock__location .location__city'),
                country: document.querySelector('.clock__location .location__country'),
            },
            greeting: {
                text: document.querySelector('.clock__greeting .greeting__text'),
                icon: document.querySelector('.clock__greeting .greeting__icon'),
            },
            quote: {
                text: document.querySelector('.clock__quote .quote__text'),
                author: document.querySelector('.clock__quote .quote__author'),
            },
            toggle: {
                body: document.querySelector('.clock__toggle'),
                label: document.querySelector('.clock__toggle .toggle__label'),
                input: document.querySelector('.clock__toggle .toggle__input'),
                icon: document.querySelector('.clock__toggle .toggle__icon'),
            },
            clock: {
                body: document.querySelector('.clock'),
                inner: document.querySelector('.clock__inner'),
            },
            panel: {
                body: document.querySelector('.panel'),
                inner: document.querySelector('.panel__inner'),
            },
        }
        this.init();
    }

    init = () => {
        console.log('app started');
        this.addEventListeners();
        this.displayTime();
        this.displayLocation();
        this.displayGreeting();
        this.displayIcon();
        this.displayImage();
        this.displayQuote();
    };

    addEventListeners = () => {
        console.log(this.elements.toggle.body)
        this.elements.toggle.body.addEventListener('click', this.changePanelState);
    };

    displayLocation = async () => {
        const request = await fetch("https://ipinfo.io/json?token=d6fea2050249fa")
        const data = await request.json();
        console.log(data);
        this.print(this.elements.location.city, data.city);
        this.print(this.elements.location.country, data.country);
    };

    displayImage = () => {
        let time = '';
        const hour = moment().hour();
        if ( hour >= 0 && hour < 5 ) time = 'night';
        if ( hour >= 5 && hour < 18 ) time = 'day';
        if ( hour >= 18 && hour <= 23  ) time = 'night';
        setTimeout(() => {
            this.elements.page.body.classList.add(`page--${time}`);
        }, 500);
    };

    displayQuote = () => {
        const quote = quotes.getQuote();
        this.print(this.elements.quote.text, quote.text);
        this.print(this.elements.quote.author, quote.author);
    };

    displayGreeting = () => {
        let time = '';
        const hour  = moment().hour();
        if ( hour >= 0 && hour < 5 ) time  = 'night' 
        if ( hour >= 5 && hour < 11 ) time = 'morning'; 
        if ( hour >= 11 && hour < 13 ) time = 'midday'; 
        if ( hour >= 13 && hour < 18 ) time  = 'afternoon'; 
        if ( hour >= 18 && hour <= 23 ) time = 'night'; 
        let greeting = `Good ${time}, it\'s currently`;
        this.print(this.elements.greeting.text, greeting);
    };

    displayIcon = () => {
        let icon = '';
        const hour = moment().hour();
        if ( hour >= 0 && hour < 5 ) icon = 'moon';
        if ( hour >= 5 && hour < 18 ) icon = 'sun';
        if ( hour >= 18 && hour <= 23  ) icon = 'moon';
        this.elements.greeting.icon.classList.add(`icon--${icon}`);
    };

    displayTime = () => {
        const locale = moment.locale('de-ch');
        const time = moment().format('LT');
        this.print(this.elements.time.time, time);
        setInterval(() => {
            this.print(this.elements.time.time, time);
        }, 30000);
    };

    changePanelState = () => {
        this.state.panel === 'inactive' ? this.state.panel= 'active' : this.state.panel = 'inactive';
        this.toggleToggle();
        this.togglePanel();
    };
    
    togglePanel = () => { 
        if ( this.state.panel === 'inactive') {
            this.elements.clock.inner.style.height = `calc(100vh - 0px)`;
        } else {
            const heightOfPanel = this.elements.panel.body.clientHeight;
            console.log(heightOfPanel);
            this.elements.clock.inner.style.height = `calc(100vh - ${heightOfPanel}px)`;
        };
    }
    
    toggleToggle = () => {
        if ( this.state.panel === 'inactive') {
            this.elements.toggle.body.classList.add('toggle--inactive');
            this.elements.toggle.label.innerText = 'less';
        } else {
            this.elements.toggle.body.classList.remove('toggle--inactive');
            this.elements.toggle.label.innerText = 'more';
        };
    }

    print = (element, value) => {
        if (!element || !value) return console.log('Error: provide element and value to print');
        element.innerText = value;
    };

};

export default App;

