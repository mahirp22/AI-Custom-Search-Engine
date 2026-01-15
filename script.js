// Grab DOM elements we need for input, feedback, and rendering results
const form = document.getElementById("search-form");
const queryInput = document.getElementById("query-input");
const resultsEl = document.getElementById("results");
const chipText = document.getElementById("chip-text");

// Handle form submission and search request
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Read and validate user input
    const query = queryInput.value.trim();
    if (!query) return;

    // Update UI while query is processing
    chipText.textContent = `searching for “${query}”...`;
    resultsEl.innerHTML = "";

    try {
        // Send query to backend route /search
        const res = await fetch("/search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        });

        // Parse JSON response from Flask
        const data = await res.json();

        // Backend-side error handling
        if (data.error) {
            chipText.textContent = "something went wrong 😿";
            resultsEl.innerHTML = `<p class="empty-state">${data.error}</p>`;
            return;
        }

        // Extract returned results array
        const results = data.results || [];

        // No results case — update UI
        if (results.length === 0) {
            chipText.textContent = "no results – try another phrasing";
            resultsEl.innerHTML =
                '<p class="empty-state">No results found. Try re-phrasing your question.</p>';
            return;
        }

        // Show count of results found
        chipText.textContent = `showing ${results.length} result(s)`;

        // Efficient DOM rendering via document fragment
        const fragment = document.createDocumentFragment();

        results.forEach((r) => {
            // Result container
            const item = document.createElement("div");
            item.className = "result-item";

            // Result title
            const title = document.createElement("h3");
            title.className = "result-title";
            title.textContent = r.title || "(no title)";

            // Result link (opens externally)
            const link = document.createElement("a");
            link.className = "result-link";
            link.href = r.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = r.url;

            // Build result card
            item.appendChild(title);
            item.appendChild(link);
            fragment.appendChild(item);
        });

        // Append all rendered items at once
        resultsEl.appendChild(fragment);

    } catch (err) {
        // Network / fetch failure handling
        chipText.textContent = "network error 😵";
        resultsEl.innerHTML = `<p class="empty-state">${err}</p>`;
    }
});
