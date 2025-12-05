/*--*const servicesNavLink = document.getElementById('services-nav-link');

servicesNavLink.classList.add('active-nav-link');
const servicesSubMenu = document.getElementById('services-sub-menu');
servicesSubMenu.classList.add('active-sub-menu');
const servicesSubMenuItems = servicesSubMenu.getElementsByTagName('a');
for (let i = 0; i < servicesSubMenuItems.length; i++) {
    servicesSubMenuItems[i].classList.add('active-sub-menu-item');
}--*/
const serviceSelect = document.querySelector("#service");
const cardElements = document.getElementById("cards");
const eventList = document.querySelector("#eventList");

const services = [
    {
        id: 1,
        name: "Guided meditation",
        description: "Experience tranquility and mindfulness with our guided meditation sessions, designed to help you relax and find inner peace.",
        price: "$20 per session"
    },
    {
        id: 2,
        name: "Yoga classes",
        description: "Join our yoga classes to improve flexibility, strength, and mental clarity. Suitable for all levels from beginners to advanced practitioners.",
        price: "$15 per class or $100 for a 10-class pass"
    },
    {
        id: 3,
        name: "Regression therapy",
        description: "Explore past life experiences and uncover hidden memories with our regression therapy sessions, aimed at personal growth and healing.",
        price: "$80 per session"
    },
    {
        id: 4,
        name: "Hypnotherapy",
        description: "Unlock the power of your subconscious mind with our hypnotherapy services, helping you overcome challenges and achieve your goals.",
        price: "$90 per session"
    },
    {
        id: 5,
        name: "Pain management",
        description: "Discover effective pain management techniques through our specialized sessions, designed to alleviate chronic pain and improve quality of life.",
        price: "$70 per session"
    }
];
function createServiceSelectList() {
    const selectElement = document.getElementById('service-select');
    if (selectElement) {
        services.forEach(service => {
            const optElement = document.createElement('option');
            optElement.value = service.id;
            optElement.textContent = service.name;
            selectElement.appendChild(optElement);
        });
    }
}

if (document.getElementById('service-select')) {
    createServiceSelectList();
}

function createServiceCards() {
    services.forEach(service => {
        if (service.id % 2 !== 0) {
            const serviceCard = document.createElement('section');
            serviceCard.classList.add('service-card');
            const title = document.createElement('h3');
            title.textContent = service.name;
            const description = document.createElement('p');
            description.textContent = service.description;
            const price = document.createElement('p');
            price.textContent = service.price;
            serviceCard.appendChild(title);

            const img = document.createElement('img');
            img.src = `images/service-${service.id}.jpg`;
            img.alt = service.name;
            serviceCard.appendChild(img);

            serviceCard.appendChild(description);
            serviceCard.appendChild(price);
            const container = document.getElementById('services-container');
            if (container) {
                container.appendChild(serviceCard);
            }
        }
    });
}

if (document.getElementById('services-container')) {
    createServiceCards();
}

function createEventsTable() {
    services.forEach(service => {
        const tableRow = document.createElement('tr');
        const header = document.createElement("th");
        const nameCell = document.createElement('td');
        nameCell.textContent = service.name;
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = service.description;

        header.innerText = service.name;

        tableRow.appendChild(header);
        tableRow.appendChild(nameCell);
        tableRow.appendChild(descriptionCell);

        if (eventList) {
            eventList.appendChild(tableRow);
        }
    });
}

if (eventList) {
    createEventsTable();
}