const button = document.querySelector('#burger-menu');

button.addEventListener('click', function() {
    const dropDownBox = document.querySelector('#drop-down');

dropDownBox.classList.toggle('show');

if (dropDownBox.classList.contains ('show')) {
    if (!dropDownBox.querySelector('a')) {
        const home = document.createElement('a');
            home.textContent = "Home";
            home.href = "../index.html";
            const directory = document.createElement('a');
            directory.textContent = "Directory";
            directory.href = "./directory.html";
            const join = document.createElement('a');
            join.textContent = "Join";
            join.href = "./join.html";
            const discover = document.createElement('a');
            discover.textContent = "Discover";
            discover.href = "./discover.html";

            dropDownBox.append(home);
            dropDownBox.append(directory);
            dropDownBox.append(join);
            dropDownBox.append(discover);
            dropDownBox.append(small);
        }
    }
    else {
        dropDownBox.innerHTML = '';
    }
}
);


const url = "./data/members.json";

const listButton = document.querySelector('#list');
const gridButton = document.querySelector('#grid');

const memberBlockSection = document.getElementById('member-block');
const memberListSection = document.getElementById('member-list');

async function getMemberData() {
    const response = await fetch(url);
    const members = await response.json();
    return members;
}

function displayMembersList(memberArray, outputElement) {
    memberBlockSection.innerHTML = "";
    memberListSection.innerHTML = "";

    memberArray.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let memlvl = document.createElement('p');
        let website = document.createElement('a');

        let memImg = document.createElement('img');

        name.innerHTML = `${member.name}`;
        address.innerHTML = `Adress: ${member.address}`;
        phone.innerHTML = `Phone: ${member.phone}`;
        memlvl.innerHTML = `Membership Level: ${member.membershipLevel}`;

        website.innerHTML = `Click for website`;
        website.setAttribute('href', member.website);
        memImg.setAttribute('alt', `${member.name} logo`);
        memImg.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(memlvl);
        card.appendChild(website);

        outputElement.appendChild(card);

    });
}
console.log(gridButton);
listButton.addEventListener('click', async () => {
    const members = await getMemberData();
    displayMembersList(members, memberListSection);
});

blockButton.addEventListener('click', async () => {
    const members = await getMemberData();
    displayMembersList(members, memberBlockSection);
});