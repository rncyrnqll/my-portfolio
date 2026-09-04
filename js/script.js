// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll  sections active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
        };
    });
    // sticky navbar 
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// portfolio gallery data
const projects = [
    {
        title: "QR Code Generator",
        image: "images/qr-scan.png",
        link: "https://github.com/rncyrnqll/QR-Code"
    },
    {
        title: "Music Player",
        image: "images/music.png",
        link: "https://github.com/rncyrnqll/Music-Player"
    },
    {
        title: "Weather App",
        image: "images/weather.png",
        link: "https://github.com/rncyrnqll/Weather-App"
    },
    {
        title: "Expense Tracker",
        image: "images/expense.png",
        link: "https://github.com/rncyrnqll/Expense_Tracker"
    },
    {
        title: "Calculator",
        image: "images/calculator.png",
        link: "https://github.com/rncyrnqll/calculator-app"
    },
    {
        title: "Chat Bot",
        image: "images/chat.png",
        link: "https://github.com/rncyrnqll/chat_bot"
    }
];

let currentProject = 0;

function loadProject(index) {
    currentProject = index;
    let project = projects[index];

    document.getElementById('galleryTitle').textContent = project.title;
    document.getElementById('galleryCounter').textContent = "Image 1 of 1";
    document.getElementById('galleryMainImg').src = project.image;
    document.getElementById('galleryLink').href = project.link;

    // update active tab styling
    document.querySelectorAll('.gallery-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });
}

function buildTabs() {
    let tabsContainer = document.getElementById('galleryTabs');

    projects.forEach((project, index) => {
        let tab = document.createElement('button');
        tab.classList.add('gallery-tab');
        tab.textContent = project.title;
        tab.onclick = () => loadProject(index);
        tabsContainer.appendChild(tab);
    });

    loadProject(0);
}

buildTabs();


// automation projects gallery data
const automationProjects = [
    {
        title: "AI Email Auto-Responder",
        description: "Built an AI-powered email automation using Zapier that reads incoming emails, generates a professional draft reply using AI, and filters out automated messages — reducing manual email triage time.",
        images: [
            "images/zapier-email-responder.png",
            "images/email-1.png",
            "images/email-2.png",
            "images/email-3.png",
            "images/email-4.png"
        ]
    },
    {
        title: "Content Summarizer",
        description:"Created a Zapier automation that fetches article content from a URL and uses AI to generate a concise summary, automatically saving it to a Google Sheet — turning long articles into quick, scannable notes.",
        images: [
            "images/zapier-content-summarizer.png",
            "images/summary-1.png",
            "images/summary-2.png",
            "images/summary-3.png",
            "images/summary-4.png",
            "images/summary-5.png"
        ]
    },
    {
    title: "Lead Qualifier Bot",
    description:"Built an AI lead-scoring automation that reads form submissions, uses AI to rate lead quality (Hot/Warm/Cold), logs the result to a spreadsheet, and posts real-time alerts to Slack — automating a task typically done manually by sales teams.",
    images: [
        "images/lead-qualifier-1.png",
        "images/lead-qualifier-2.png",
        "images/lead-qualifier-3.png",
        "images/lead-qualifier-4.png",
        "images/lead-qualifier-5.png",
        "images/lead-qualifier-6.png",
        "images/slack.png"
    ]
}
];

let currentAutomationProject = 0;
let currentAutomationImage = 0;

function loadAutomationProject(projectIndex) {
    currentAutomationProject = projectIndex;
    currentAutomationImage = 0;
    updateAutomationImage();

    // update active tab styling
    document.querySelectorAll('#automationTabs .gallery-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === projectIndex);
    });
}

function updateAutomationImage() {
    let project = automationProjects[currentAutomationProject];

    document.getElementById('automationTitle').textContent = project.title;
    document.getElementById('automationDescription').textContent = project.description;
    document.getElementById('automationCounter').textContent =
        "Image " + (currentAutomationImage + 1) + " of " + project.images.length;
    document.getElementById('automationMainImg').src = project.images[currentAutomationImage];

    buildAutomationThumbs();
}

function buildAutomationThumbs() {
    let thumbsContainer = document.getElementById('automationThumbs');
    thumbsContainer.innerHTML = "";

    let project = automationProjects[currentAutomationProject];

    project.images.forEach((imageSrc, index) => {
        let thumb = document.createElement('img');
        thumb.src = imageSrc;
        thumb.classList.add('gallery-thumb');
        thumb.classList.toggle('active', index === currentAutomationImage);
        thumb.onclick = () => {
            currentAutomationImage = index;
            updateAutomationImage();
        };
        thumbsContainer.appendChild(thumb);
    });
}

function buildAutomationTabs() {
    let tabsContainer = document.getElementById('automationTabs');

    automationProjects.forEach((project, index) => {
        let tab = document.createElement('button');
        tab.classList.add('gallery-tab');
        tab.textContent = project.title;
        tab.onclick = () => loadAutomationProject(index);
        tabsContainer.appendChild(tab);
    });

    loadAutomationProject(0);
}

document.getElementById('automationPrev').onclick = () => {
    let project = automationProjects[currentAutomationProject];
    currentAutomationImage = (currentAutomationImage - 1 + project.images.length) % project.images.length;
    updateAutomationImage();
};

document.getElementById('automationNext').onclick = () => {
    let project = automationProjects[currentAutomationProject];
    currentAutomationImage = (currentAutomationImage + 1) % project.images.length;
    updateAutomationImage();
};

buildAutomationTabs();



// scroll reveal 
ScrollReveal({
  //  reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// typed js 
const typed = new Typed('.multiple-text', {
    strings: ['Data Processing Analyst', 'Aspiring Python Developer', 'Gaming Video Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// email js function 
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_0igygdi","template_nvylorh",parms).then(alert("Email Sent"))
}