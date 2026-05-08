const linksURL="https://ehleblanc.github.io/wdd230/data/links.json";
const baseURL="https://ehleblanc.github.io/wdd230/";
const list = document.querySelector('#weekLinks');
let n= 1;
async function getLinks ()
{
    const response=await fetch(linksURL);
    const data=await response.json();
    displayLinks(data.weeks);
}
getLinks();

const displayLinks= (weeks) =>
{   
    weeks.forEach(week => {
        let li = document.createElement('li');
        li.classList.add("links");
        li.innerHTML=`Week ${n} |`;
        week.links.forEach(link =>
        {
            let a= document.createElement('a');
            a.innerHTML=`${link.title} |`;
            a.setAttribute("src", link.url);
            li.appendChild(a);
        }
        )
        list.appendChild(li);
        n=n+1;
    });
}