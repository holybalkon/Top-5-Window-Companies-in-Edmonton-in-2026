(function () {
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");
  document.querySelectorAll(".faq-trigger").forEach(function (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", open ? "false" : "true");
      panel.classList.toggle("open", !open);
    });
  });
})();
