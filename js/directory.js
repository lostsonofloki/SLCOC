document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab the HTML elements we need to interact with
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const memberCards = document.querySelectorAll('.member-card');

    // 2. Create the function that will do the filtering
    const filterDirectory = () => {
        // Get the current value of the search bar (make it lowercase for easy matching)
        const searchTerm = searchInput.value.toLowerCase();
        // Get the currently selected category from the dropdown
        const selectedCategory = categoryFilter.value;

        // 3. Loop through every single member card on the page
        memberCards.forEach(card => {
            // Pull the category from the data-category attribute we set in the HTML
            const cardCategory = card.getAttribute('data-category');
            
            // Grab all the text inside the card (Name, Address, Phone, etc.)
            const cardText = card.textContent.toLowerCase();

            // Check if the card matches the chosen category (or if "All" is selected)
            const matchesCategory = (selectedCategory === 'all') || (selectedCategory === cardCategory);
            
            // Check if the typed search term exists anywhere in the card's text
            const matchesSearch = cardText.includes(searchTerm);

            // 4. Show or hide the card based on the results
            if (matchesCategory && matchesSearch) {
                card.style.display = 'block'; // Show the card
            } else {
                card.style.display = 'none';  // Hide the card
            }
        });
    };

    // 5. Add Event Listeners so the function runs automatically
    if (searchInput && categoryFilter) {
        // Runs every time the user types a letter
        searchInput.addEventListener('input', filterDirectory);
        
        // Runs every time the user changes the dropdown selection
        categoryFilter.addEventListener('change', filterDirectory);
    }
});
