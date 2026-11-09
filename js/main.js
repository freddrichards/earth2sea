// Mobile navigation toggle
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Render news sidebar
  var list = document.getElementById("news-list");
  var items = window.EARTH2SEA_NEWS || [];
  if (list) {
    var fmt = function (iso) {
      var monthOnly = /^\d{4}-\d{2}$/.test(iso);
      var d = new Date((monthOnly ? iso + "-01" : iso) + "T12:00:00");
      var opts = monthOnly ? { month: "long", year: "numeric" } : { day: "numeric", month: "long", year: "numeric" };
      return d.toLocaleDateString("en-GB", opts);
    };
    items.forEach(function (n) {
      var li = document.createElement("li");
      var time = document.createElement("time");
      time.dateTime = n.date;
      time.textContent = fmt(n.date);
      var h = document.createElement("h3");
      if (n.link) {
        var a = document.createElement("a");
        a.href = n.link;
        a.textContent = n.title;
        h.appendChild(a);
      } else {
        h.textContent = n.title;
      }
      var p = document.createElement("p");
      p.textContent = n.text;
      li.appendChild(time);
      li.appendChild(h);
      li.appendChild(p);
      list.appendChild(li);
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
