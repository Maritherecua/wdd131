const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// get current year
document.getElementById("currentyear").innerText = new Date().getFullYear();

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Oakland California, USA",
        location: "Oakland, California, USA",
        dedicated: "1964/2019, November 17/June 16",
        area: 80157,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california-usa/400x250/oakland-california-usa-temple-1009069-wallpaper.jpg"
    },
    {
        templeName: "Guadalajara Mexico",
        location: "Guadalajara, Mexico",
        dedicated: "2001, April, 29",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guadalajara-mexico/2018/400x250/Guadalajara-Mexico-Temple01.jpg"
    },
    {
        templeName: "Fresno California, USA",
        location: "Fresno, California, USA",
        dedicated: "2000, April, 9",
        area: 10850,
        imageUrl:
            "https://churchofjesuschristtemples.org/fresno-california-temple/photographs/#Gallery-57"
    },
    {
        templeName: "Sacramento California, USA",
        location: "Sacramento, California, USA",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-usa-temple/sacramento-california-usa-temple-10403.jpg"
    }
    // Add more temple objects here...
];


function DisplayTemples(temples) {
    const gallery = document.querySelector("#gallery");
    gallery.innerHTML = "";
    temples.forEach(t => {
        const card = document.createElement("div");
        const templeHTML = `
		<h3>${t.templeName}</h3>
		<p><strong>Location: </strong>${t.location}</p>
		<p><strong>Dedicated: </strong>${t.dedicated}</p>
		<p><strong>Size: </strong>${t.area}</p>
		<img src="${t.imageUrl}" alt="A picture of ${t.templeName} Temple" loading="lazy">
		`;

        card.innerHTML = templeHTML;
        gallery.appendChild(card);
    });
}


const allTemplesLink = document.querySelector("#all-temples");
const oldTemplesLink = document.querySelector("#old-temples");
const newTemplesLink = document.querySelector("#new-temples");
const largeTemplesLink = document.querySelector("#large-temples");
const smallTemplesLink = document.querySelector("#small-temples");
const selection = document.querySelector("#selection")


allTemplesLink.addEventListener("click", () => {
    DisplayTemples(temples);
    selection.innerText = "Home";
});
oldTemplesLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)
    DisplayTemples(filteredTemples);
    selection.innerText = "Old";
});
newTemplesLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
    DisplayTemples(filteredTemples);
    selection.innerText = "New";
});
largeTemplesLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => temple.area > 90000)
    DisplayTemples(filteredTemples);
    selection.innerText = "Large";
});
smallTemplesLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => temple.area < 10000)
    DisplayTemples(filteredTemples);
    selection.innerText = "Small";
});


DisplayTemples(temples);