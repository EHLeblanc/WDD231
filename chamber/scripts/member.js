const spotlightContainer = document.getElementById("spotlights");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    displaySpotlights(data.members);
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

function displaySpotlights(data) {
  console.log(data);
  console.log(data.members);

  // Filter only Gold or Silver members
  const qualifiedMembers = members.filter(member =>
    member.membership === "Gold" || member.membership === "Silver"
  );

  // Shuffle array randomly
  const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

  // Select 2 or 3 random members
  const randomCount = Math.floor(Math.random() * 2) + 2;
  const selectedMembers = shuffled.slice(0, randomCount);

  // Display cards
  selectedMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");

    card.innerHTML = `
      <h2>${member.companyName}</h2>
      <img src="${member.logo}" alt="${member.companyName} logo">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p>
        <a href="${member.website}" target="_blank">
          Visit Website
        </a>
      </p>
      <p><strong>Membership:</strong> ${member.membership}</p>
    `;

    spotlightContainer.appendChild(card);
  });
}

getMembers();