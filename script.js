const bar = document.getElementById('icon');
const nav = document.querySelector('nav');
const times = document.getElementById('closeBtn');
const menuItems = document.querySelectorAll("a");
const dollarSign = document.getElementById('dollar-sign')
document.title = 'BILLIONSPACE';
bar.addEventListener('click', () => {
  nav.classList.add('active');
});

times.addEventListener('click', () => {
  nav.classList.remove('active');
});

window.addEventListener('scroll', () => {
  nav.classList.remove('active');
});
const imgBox = document.getElementById('img-box-main');
const img = document.createElement('img');
const section = document.getElementById('home');
const section2 = document.getElementById('conbtent-home');

img.alt = 'ASTRONOMY PICTURE';

const a = document.getElementById('a');
const paragraphs = document.getElementById('para')

const apiUrl = "https://api.nasa.gov/planetary/apod";
const apiKey = "BKTiKbvUtEKMX5LlcxQt20yBy7deHGJ9PoblD54m";

fetch(`${apiUrl}?api_key=${apiKey}`)
.then(response => response.json())
.then(data => {
  img.src = data.url;
  
  paragraphs.innerHTML = "<span>Explanation :</span> " + data.explanation;
}).catch(error => console.error('Error ', error))
window.addEventListener('DOMContentLoaded', ()=>{
  
  imgBox.appendChild(img);
  
});
let sections = document.querySelectorAll('.home2', '.home', '#home',);

window.onscroll = () =>{
 let top = window.scrollY;
 
  sections.forEach(sec=>{
    let offSet = sec.offsetTop - 250;
    let height = sec.offsetHeight + 100;
    
    if(top >= offSet && top <= offSet + height){
      sec.classList.add('animate');
      
    } else {
      sec.classList.remove('animate');
      
    }
    
  })
  
}
const apiUrlIss = 'https://api.wheretheiss.at/v1/satellites/25544';

async function fetchISSData() {
  try {
    const response = await fetch(apiUrlIss);
    if (!response.ok) {
      throw new Error('Failed to fetch ISS data.');
    }
    const data = await response.json();
    displayISSData(data)
  } catch (error) {
    console.error(error);
    // Display an error message on your website if the API call fails
  }
}

function displayISSData(data) {
  const lat = document.getElementById('lat');
  const lon = document.getElementById('lon');
  const vel = document.getElementById('vel');
  const name = document.getElementById('name');
  const alt = document.getElementById('alt');
  
  name.innerText = `${data.name}`;
  
  lat.innerText = `${data.latitude}`;
  
  lon.innerText = `${data.longitude}`;
  
  vel.innerText = `${data.velocity}`;
  
  alt.innerText = `${data.altitude}`;
  
}
setInterval(fetchISSData, 10000);