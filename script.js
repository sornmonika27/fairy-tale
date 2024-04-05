const API_URL = "https://fairy-tale-h8ekmey95-siemhong.vercel.app/";

// GET /api/fairytales





// Simulated function to fetch fairy tales from API
function fetchFairyTales() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data from API
    setTimeout(() => {
      const fairyTales = [
        {
          title: "Cinderella",
          ageGroup: "Preschool",
          audioUrl: "cinderella.mp3",
        },
        {
          title: "Snow White",
          ageGroup: "Elementary",
          audioUrl: "snow_white.mp3",
        },
        // Add more fairy tales here
      ];
      resolve(fairyTales);
    }, 1000); // Simulate delay of 1 second
  });
}

// Function to display top fairy tale and age categories
async function displayHomePageContent() {
  try {
    const fairyTales = await fetchFairyTales();

    // Display top fairy tale
    const topFairyTaleContainer = document.querySelector("#topFairyTale");
    const topFairyTale = fairyTales[0]; // Assuming the first tale is the top one
    topFairyTaleContainer.innerHTML = `
          <div class="card">
            <div class="card-body">
            <a href="../../Detail-page/index.html?id=${data[i].id}" class="card-title"style="font-size:20px;">${data[i].title}</a>
              <h5 class="card-title">${topFairyTale.title}</h5>
              <p class="card-text">Age Group: ${topFairyTale.ageGroup}</p>
              <audio controls>
                <source src="${topFairyTale.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        `;

    // Display age categories
    const ageCategoriesContainer = document.querySelector("#ageCategories");
    const ageGroups = Array.from(
      new Set(fairyTales.map((tale) => tale.ageGroup))
    ); // Get unique age groups
    ageGroups.forEach((ageGroup) => {
      const talesInAgeGroup = fairyTales.filter(
        (tale) => tale.ageGroup === ageGroup
      );
      ageCategoriesContainer.innerHTML += `
            <li class="list-group-item">${ageGroup}</li>
          `;
    });
  } catch (error) {
    console.error("Error fetching fairy tales:", error);
  }
}

// Call displayHomePageContent function when the page loads
window.onload = displayHomePageContent;
