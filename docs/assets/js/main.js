document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchForm = document.querySelector(".search-form");

    const featuredPost = document.querySelector(".featured-post-card");
    const postCards = document.querySelectorAll(".regular-posts-grid .blog-card");

    // --- TÃ¬m kiáº¿m realtime ---
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.trim().toLowerCase();

        if (keyword === "") {
            resetView();
            return;
        }

        // áº¨n bÃ i viáº¿t ná»•i báº­t khi Ä‘ang tÃ¬m
        featuredPost.style.display = "none";

        postCards.forEach(card => {
            const title = card.querySelector("h3").innerText.toLowerCase();
            const desc = card.querySelector("p:nth-of-type(2)")?.innerText.toLowerCase() || "";

            if (title.includes(keyword) || desc.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // --- Submit form váº«n hoáº¡t Ä‘á»™ng bÃ¬nh thÆ°á»ng ---
    searchForm.addEventListener("submit", e => e.preventDefault());

    // --- HÃ m reset UI vá» nguyÃªn báº£n ---
    function resetView() {
        featuredPost.style.display = ""; // khÃ´i phá»¥c Ä‘Ãºng CSS gá»‘c
        postCards.forEach(card => {
            card.style.display = "";
        });
    }
});

