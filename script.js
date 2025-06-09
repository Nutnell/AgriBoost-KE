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

document.addEventListener("DOMContentLoaded", () => {
    const chatInput = document.getElementById("chat-input");
    const sendChatBtn = document.getElementById("send-chat-btn");
    const chatDisplay = document.querySelector(".chat-display");
    const aiTypingIndicator = document.querySelector(".ai-typing-indicator");

    const knowledgeBase = [
        {
          "keywords": ["agriboost", "company", "who are you", "about us", "agriboost ke", "story", "purpose", "mission"],
          "answer": "AgriBoost KE empowers Kenyan agriculture by providing affordable feeds and cutting-edge machinery, ensuring sustainable farming for all. We were founded to address challenges like limited access to tools and unaffordable livestock feeds, especially during dry seasons, and to combat rising fertilizer prices and dishonest practices."
        },
        {
          "keywords": ["feeds", "livestock feeds", "animal feed", "poultry feed", "dairy feed", "beef feed", "broiler feed", "layer feed", "manure", "hay", "silage", "corn husks", "nutrition"],
          "answer": "Our Enhanced Livestock Feeds are premium nutrition solutions. They include manure, hay, silage, corn husks for poultry, and specialised feed for dairy, beef, broilers, and layers. Designed for maximum nutrition and affordability, we use locally sourced feed alternatives to reduce costs and ensure availability during dry seasons."
        },
        {
          "keywords": ["machinery", "rental", "equipment", "machines", "threshers", "harvesters", "drones", "weed control", "rent equipment", "tools", "advanced machinery"],
          "answer": "We offer Rare Farming Machinery Rental, providing access to hard-to-find machines such as multi-crop threshers, potato harvesters, smart irrigation drones, and laser weed control machines. Farmers can rent these efficient, high-tech tools without full investment costs through our short-term hiring program."
        },
        {
          "keywords": ["multi-crop thresher", "thresher rental price", "threshing"],
          "answer": "The Multi-Crop Thresher efficiently processes wheat, rice, barley, and other grains. Its rental price is KSh 5,000 per day."
        },
        {
          "keywords": ["potato harvester", "potato machine rental price", "potato digging"],
          "answer": "The Potato Harvester is an automated potato digging and collection system. Its rental price is KSh 8,000 per day."
        },
        {
          "keywords": ["smart irrigation drone", "irrigation drone rental price", "drone for farm", "watering", "precision watering"],
          "answer": "The Smart Irrigation Drone offers GPS-guided precision watering with real-time monitoring. Its rental price is KSh 3,500 per day."
        },
        {
          "keywords": ["laser weed control machine", "weed control rental price", "chemical-free weed", "weed elimination"],
          "answer": "The Laser Weed Control Machine provides chemical-free weed elimination using precision laser technology. Its rental price is KSh 6,500 per day."
        },
        {
          "keywords": ["consultation services", "farm consultation", "expert guidance", "farm productivity", "fertilizers", "fake fertilizers", "optimize yields", "data-driven"],
          "answer": "Our Farm Consultation Services offer expert guidance on maximizing farm productivity, detecting fake fertilizers, and effectively using advanced machinery. We help farmers optimize yields and reduce losses through expert knowledge and data-driven agricultural analysis."
        },
        {
          "keywords": ["team", "who is nathaniel", "rashid", "aisha", "brian", "employees", "staff", "founder", "ceo", "who founded", "company founder", "leadership"],
          "answer": "Our team includes: Nathaniel (Founder/CEO), Rashid (Operations Manager), Aisha (Lead Agricultural Specialist), and Brian (Marketing and Outreach)."
        },
        {
          "keywords": ["contact", "email", "phone", "location", "address", "get in touch", "where are you", "how to contact"],
          "answer": "You can reach AgriBoost KE via email at info@agriboostke.com. Our physical location is Nairobi, Kenya. Our phone number is also available for direct contact."
        },
        {
          "keywords": ["values", "affordable", "innovative", "sustainable", "mission", "core values"],
          "answer": "AgriBoost KE's core brand values are: affordability (fair pricing for all farmers), innovation (cutting-edge solutions), and sustainability (building lasting prosperity for Kenyan agriculture)."
        },
        {
          "keywords": ["website purpose", "what does agriboost ke do"],
          "answer": "AgriBoost KE aims to transform Kenyan agriculture by providing affordable feeds and cutting-edge machinery, empowering even the smallest farmer to significantly transform their yield."
        },
        {
          "keywords": ["how many visitors", "visitors"],
          "answer": "We've had over 1,247 visitors to our website, and counting!"
        }
    ];

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        let bestResponse = "I'm sorry, I don't have information on that topic. Please try asking about our products, services, team, or contact details.";

        for (const entry of knowledgeBase) {
            if (entry.keywords.some(keyword => lowerCaseMessage.includes(keyword.toLowerCase()))) {
                bestResponse = entry.answer;
                break;
            }
        }
        return bestResponse;
    }

    function addMessageToChat(sender, message, isAI = false) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message");
        if (isAI) {
            messageDiv.classList.add("ai-message");
        } else {
            messageDiv.classList.add("user-message");
        }

        let avatarHtml = '';
        if (isAI) {
            avatarHtml = `<div class="chat-avatar ai-avatar">AI</div>`;
        } else {
            avatarHtml = `<div class="chat-avatar user-avatar">You</div>`;
        }

        messageDiv.innerHTML = `
            ${avatarHtml}
            <div class="chat-bubble ${isAI ? 'ai-bubble' : 'user-bubble'}">
                <p class="chat-text">${message}</p>
            </div>
        `;

        if (aiTypingIndicator && chatDisplay.contains(aiTypingIndicator)) {
             chatDisplay.insertBefore(messageDiv, aiTypingIndicator);
        } else {
             chatDisplay.appendChild(messageDiv);
        }
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    function showTypingIndicator() {
        if (aiTypingIndicator) {
            aiTypingIndicator.style.display = 'flex';
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
    }

    function hideTypingIndicator() {
        if (aiTypingIndicator) {
            aiTypingIndicator.style.display = 'none';
        }
    }

    async function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === "") {
            return;
        }

        addMessageToChat("You", userMessage);
        chatInput.value = "";
        showTypingIndicator();

        await new Promise(resolve => setTimeout(resolve, 1000));

        const botResponse = getBotResponse(userMessage);
        hideTypingIndicator();
        addMessageToChat("AI", botResponse, true);
    }

    addMessageToChat("AI", "Hello! I'm AgriBot, your assistant for AgriBoost KE. Ask me about our products, services, or company!", true);

    sendChatBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    hideTypingIndicator();

});

document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question && otherQuestion.classList.contains("is-active")) {
                    otherQuestion.classList.remove("is-active");
                    otherQuestion.nextElementSibling.classList.remove("is-active");
                    otherQuestion.nextElementSibling.style.maxHeight = "0";
                    otherQuestion.nextElementSibling.style.paddingBottom = "0";
                    otherQuestion.nextElementSibling.style.paddingTop = "0";
                }
            });

            question.classList.toggle("is-active");

            if (question.classList.contains("is-active")) {
                answer.classList.add("is-active");
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.paddingBottom = "20px";
                answer.style.paddingTop = "8px";
            } else {
                answer.classList.remove("is-active");
                answer.style.maxHeight = "0";
                answer.style.paddingBottom = "0";
                answer.style.paddingTop = "0";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const visitorCountSpan = document.getElementById("visitor-count");
    if (visitorCountSpan) {
        let visitCount = parseInt(localStorage.getItem('siteVisitCount')) || 0;
        visitCount++;
        localStorage.setItem('siteVisitCount', visitCount.toString());
        visitorCountSpan.textContent = visitCount.toLocaleString();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageTextarea = document.getElementById("message");

    function showError(element, message) {
        let errorElement = element.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.classList.add('error-message', 'text-red-500', 'text-sm', 'mt-1');
            element.parentNode.insertBefore(errorElement, element.nextSibling);
        }
        errorElement.textContent = message;
        element.classList.add('border-red-500');
        element.classList.remove('border-gray-300');
    }

    function clearError(element) {
        const errorElement = element.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.remove();
        }
        element.classList.remove('border-red-500');
        element.classList.add('border-gray-300');
    }

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Full Name is required.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        const emailValue = emailInput.value.trim();
        if (emailValue === "") {
            showError(emailInput, "Email Address is required.");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (messageTextarea.value.trim() === "") {
            showError(messageTextarea, "Message cannot be empty.");
            isValid = false;
        } else {
            clearError(messageTextarea);
        }

        return isValid;
    }

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (validateForm()) {
                console.log("Form submitted successfully!");
                console.log("Name:", nameInput.value.trim());
                console.log("Email:", emailInput.value.trim());
                console.log("Message:", messageTextarea.value.trim());
                alert("Thank you for your message! We will get back to you soon.");
                contactForm.reset();
            } else {
                console.log("Form validation failed. Please correct the errors.");
            }
        });

        nameInput.addEventListener("input", () => clearError(nameInput));
        emailInput.addEventListener("input", () => clearError(emailInput));
        messageTextarea.addEventListener("input", () => clearError(messageTextarea));
    }
})