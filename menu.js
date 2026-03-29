document.addEventListener("DOMContentLoaded", () => {

  // Bootstrap CSS toevoegen
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  document.head.appendChild(link);

  // Menu toevoegen
  const menuHTML = `
    <div class="dropdown position-fixed top-0 end-0 m-3" style="z-index: 2000;">
      <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
        ☰
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="kaart.html">Kaart</a></li>
        <li><a class="dropdown-item" href="groepen.html">Groepen</a></li>
        <li><a class="dropdown-item" href="index.html">Logboek</a></li>
      </ul>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", menuHTML);

  // Bootstrap JS toevoegen
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  document.body.appendChild(script);

});