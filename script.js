document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-button");
  const techniqueCards = document.querySelectorAll(".technique-card");
  const transcriptRows = document.querySelectorAll("#transcript tbody tr");

  const setActiveFilter = (filter) => {
    const matchAll = filter === "all";

    techniqueCards.forEach((card) => {
      const matches = matchAll || card.dataset.technique === filter;
      card.classList.toggle("hidden", !matches);
    });

    transcriptRows.forEach((row) => {
      const matches = matchAll || row.dataset.technique === filter;
      row.classList.toggle("hidden", !matches);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      setActiveFilter(button.dataset.filter);
    });
  });
});
