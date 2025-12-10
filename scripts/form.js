const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product");

function createProductList() {
  products.forEach(p => {
    const optElement = document.createElement("option");
    optElement.setAttribute("value", p.id);
    optElement.innerText = p.name;

    productSelect?.appendChild(optElement);
  });
}

createProductList();

// Initialize counter from localStorage or start at 0
let counter = Number(localStorage.getItem("tally")) || 0;
const counterDisplay = document.querySelector("#reviews");

// Increment and display the review count
function tallyReviews() {
  counter = Number(localStorage.getItem("tally")) || 0;
  counter = counter + 1;
  localStorage.setItem("tally", counter);

  if (counterDisplay) {
    counterDisplay.textContent = `Thank you! You have submitted ${counter} review${counter !== 1 ? 's' : ''}.`;
  }
}

// Auto-call on review.html page load
if (counterDisplay) {
  tallyReviews();
}