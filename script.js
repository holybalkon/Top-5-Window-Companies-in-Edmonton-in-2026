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

  // Open all external (http/https, other host) links in a new tab.
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.hostname === window.location.hostname) return;
    a.setAttribute("target", "_blank");
    var rel = (a.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
    ["noopener"].forEach(function (token) {
      if (rel.indexOf(token) === -1) rel.push(token);
    });
    a.setAttribute("rel", rel.join(" "));
  });
})();
