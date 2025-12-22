let cartCount = 0;

const cartCountSpan = document.getElementById("cartCount");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const categories = document.querySelectorAll(".category");
const applyBtn = document.getElementById("applyBtn");
const filters = document.querySelectorAll("input[type='checkbox'], select");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const products = document.querySelectorAll(".card");

function searchProducts() {
    const value = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();

        if (name.includes(value)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

/* Click search icon */
searchBtn.addEventListener("click", searchProducts);

/* Press Enter key */
searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        searchProducts();
    }
});


/* Add to cart logic */
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountSpan.textContent = cartCount;
    });
});

/* Category selection (Men / Women / Kids) */
categories.forEach(category => {
    category.addEventListener("click", (e) => {
        e.preventDefault();

        categories.forEach(c => c.classList.remove("active"));
        category.classList.add("active");

        alert(category.dataset.category + " section selected");
    });
});

/* Show Apply button when filter/sort changes */
filters.forEach(filter => {
    filter.addEventListener("change", () => {
        applyBtn.style.display = "block";
    });
});

/* Apply button click */
applyBtn.addEventListener("click", () => {
    alert("Filters applied");
    applyBtn.style.display = "none";
});


