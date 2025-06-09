document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle-button");
    const htmlElement = document.documentElement;


    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        htmlElement.classList.add(currentTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.add("light");
    }

    themeToggleButton.addEventListener("click", () => {
        if (htmlElement.classList.contains("light")) {
            htmlElement.classList.remove("light");
            htmlElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            htmlElement.classList.remove("dark");
            htmlElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const setText = (elementId, content) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        }
    };

    const setInnerHTML = (elementId, content) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = content;
        }
    };

    const products = [
        {
            name: "Enhanced Livestock Feeds",
            label: "Premium Nutrition Solutions",
            description:
                "Includes manure, hay, silage, corn husks for poultry, and specialised feed for dairy, beef, broilers, and layers. Designed for maximum nutrition and affordability.",
            feature: "Affordable feed stock",
            method: "Locally sourced feed alternatives",
            impact: "Reduces cost and ensures availability during dry seasons.",
            icon: "🌾",
        },
        {
            name: "Rare Farming Machinery Rental",
            label: "Advanced Equipment Access",
            description:
                "Provides hard to find machines such as multi-crop threshers, potato harvesters, smart irrigation drones, and laser weed control machines. Farmers can rent instead of purchasing.",
            feature: "Rare machinery access",
            method: "Short-term hiring for farmers",
            impact: "Gives farmers access to efficient, high-tech tools without full investment costs.",
            icon: "🚜",
        },
        {
            name: "Farm Consultation Services",
            label: "Expert Agricultural Guidance",
            description:
                "Expert guidance on maximising farm productivity, detecting fake fertilizers, and using advanced machinery effectively. Helps farmers optimize yields and reduce losses.",
            feature: "Professional farm consulting",
            method: "Data-driven agricultural analysis",
            impact: "Helps farmers optimize yields and reduce losses through expert knowledge.",
            icon: "📊",
        },
    ];

    let currentProductIndex = 0;
    const prevProductBtn = document.getElementById("prev-product");
    const nextProductBtn = document.getElementById("next-product");
    const productDotsContainer = document.getElementById("product-dots");

    function updateProductDisplay() {
        const product = products[currentProductIndex];

        setInnerHTML("product-icon", product.icon);
        setText("product-name", product.name);
        setText("product-label", product.label);
        setText("product-description", product.description);
        setText("product-feature", product.feature);
        setText("product-method", product.method);
        setText("product-impact", product.impact);

        productDotsContainer.innerHTML = "";
        products.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.classList.add("dot");
            if (index === currentProductIndex) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                currentProductIndex = index;
                updateProductDisplay();
            });
            productDotsContainer.appendChild(dot);
        });
    }

    prevProductBtn.addEventListener("click", () => {
        currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
        updateProductDisplay();
    });

    nextProductBtn.addEventListener("click", () => {
        currentProductIndex = (currentProductIndex + 1) % products.length;
        updateProductDisplay();
    });

    updateProductDisplay();
});