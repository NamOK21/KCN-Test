document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("lang-toggle");

    btn.addEventListener("click", function () {
        let currentLang = btn.getAttribute("data-lang");

        if (currentLang === "vi") {
            btn.setAttribute("data-lang", "en");
            btn.textContent = "EN";
        } else {
            btn.setAttribute("data-lang", "vi");
            btn.textContent = "VN";
        }
    });
});
