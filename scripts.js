document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Define predefined responses
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hello! How can I assist you today?",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "what is your name": "I'm your friendly chat bot.",
        "help": "Sure! What do you need help with?",
        "bye": "Goodbye! Have a great day!",
        "what are your products": "We have everything you need and want, just scroll my page and you will surely find what you're looking for",
        "thank you": "Always a pleasure to serve you, Bye!!"

    };

    sendButton.addEventListener('click', function() {
        const userMessage = userInput.value.trim().toLowerCase();
        if (userMessage) {
            addMessage(userInput.value, 'user-message');
            userInput.value = '';
            getBotResponse(userMessage);
        }
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Get bot response based on user message
        const botMessage = responses[userMessage] || "I'm sorry, I don't understand that.";
        setTimeout(function() {
            addMessage(botMessage, 'bot-message');
        }, 1000);
    }
});
