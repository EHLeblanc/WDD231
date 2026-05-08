const baseURL = "https://ehleblanc.github.io/wdd230/";

const linksURL = "https://ehleblanc.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

  function displayLinks(weeks) {
    // Get the container element where the links will be appended
    const linksContainer = document.getElementById('linksContainer');

    // Clear the container in case there's existing content
    linksContainer.innerHTML = '';

    // Loop through each week object
    weeks.forEach(week => {
        // Create a heading for the week
        const weekHeading = document.createElement('h3');
        weekHeading.textContent = week.week;
        linksContainer.appendChild(weekHeading);

        // Create a list for the links
        const linksList = document.createElement('ul');

        // Loop through the links of the week
        week.links.forEach(link => {
            // Create a list item for each link
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.target = "_blank"; // Open the link in a new tab

            // Append the anchor to the list item and the list item to the list
            listItem.appendChild(anchor);
            linksList.appendChild(listItem);
        });

        // Append the list to the container
        linksContainer.appendChild(linksList);
    });
}

// Example data to test the function
const weeksData = [
    {
        "week": "Week 1",
        "links": [
            { "url": "https://example.com/1", "title": "Link 1" },
            { "url": "https://example.com/2", "title": "Link 2" }
        ]
    },
    {
        "week": "Week 2",
        "links": [
            { "url": "https://example.com/3", "title": "Link 3" },
            { "url": "https://example.com/4", "title": "Link 4" }
        ]
    }
];

// Call the function with the example data
displayLinks(weeksData);