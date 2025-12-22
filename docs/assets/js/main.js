document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchForm = document.querySelector(".search-form");

    const featuredPost = document.querySelector(".featured-post-card");
    const postCards = document.querySelectorAll(".regular-posts-grid .blog-card");

    // --- Tìm kiếm realtime ---
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.trim().toLowerCase();

        if (keyword === "") {
            resetView();
            return;
        }

        // Ẩn bài viết nổi bật khi đang tìm
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

    // --- Submit form vẫn hoạt động bình thường ---
    searchForm.addEventListener("submit", e => e.preventDefault());

    // --- Hàm reset UI về nguyên bản ---
    function resetView() {
        featuredPost.style.display = ""; // khôi phục đúng CSS gốc
        postCards.forEach(card => {
            card.style.display = "";
        });
    }
});
