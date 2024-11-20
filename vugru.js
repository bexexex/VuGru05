document.addEventListener('DOMContentLoaded', function() {
    const acceptQuoteBtn = document.getElementById('acceptQuoteBtn');
    const declineQuoteBtn = document.getElementById('declineQuoteBtn');
    const responseMessage = document.getElementById('responseMessage');
    const outputMessage = document.getElementById('outputMessage');
    const clientScreen = document.getElementById('clientScreen');
    const videographerScreen = document.getElementById('videographerScreen');
    const clientComments = document.getElementById('clientComments');
    const responseTitle = document.getElementById('responseTitle');
    const newQuoteSection = document.getElementById('newQuoteSection');
    const submitNewQuoteBtn = document.getElementById('submitNewQuoteBtn');

    acceptQuoteBtn.addEventListener('click', () => handleQuoteResponse('accept'));
    declineQuoteBtn.addEventListener('click', () => handleQuoteResponse('decline'));
    submitNewQuoteBtn.addEventListener('click', submitNewQuote);

    function handleQuoteResponse(action) {
        const message = responseMessage.value;
        if (message.trim() === "") {
            alert("Please add a comment before responding to the quote.");
            return;
        }

        outputMessage.innerText = action === 'accept' ? "Quote accepted successfully!" : "Quote declined.";
        
        // Display client comments in videographer screen
        clientComments.innerText = message;

        // Update videographer screen based on response
        responseTitle.innerText = action === 'accept' ? "Quote Accepted" : "Quote Declined";
        newQuoteSection.style.display = action === 'decline' ? 'block' : 'none';

        // Switch to videographer screen after a short delay
        setTimeout(() => {
            clientScreen.style.display = "none";
            videographerScreen.style.display = "block";
        }, 1500);
    }

    function submitNewQuote() {
        const newQuoteDetails = document.getElementById('newQuoteDetails').value;
        if (newQuoteDetails.trim() === "") {
            alert("Please enter details for the new quote.");
            return;
        }
        alert("New quote submitted successfully!");
        // Here you would typically send this data to a server
    }
});
