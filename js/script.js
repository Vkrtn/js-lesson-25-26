// const boxBg = document.querySelector('.b1')
// const boxBgTwo = document.querySelector('.b2')
// let count = 0;
// // btn.addEventListener('click' ,() => console.log('sdsd'))
// // btn.onclick = () => console.log('sdfss');;

// const clickHandler = (e) => {count++
// (count % 2 == 0) ? user.innerText =`close` : user.innerText =`open` ;
// (count % 2 == 0) ? boxBg.style.background = '#008000cc'
// : boxBg.style.background = '#ff0000cc';
// (count % 2 == 0) ? boxBgTwo.style.background = '#ff0000cc'
// : boxBgTwo.style.background = '#008000cc';
// }

// btn.addEventListener('click' ,clickHandler);

// const btn = document.querySelector(".btn");
// const box = document.querySelector(".box");
// const colors = ["green", "red", "blue"];
// let index = 0;

// const bgChenge = () => {
//   index < colors.length - 1 ? index++ : (index = 0);
//   box.style.background = colors[index];
// };

// btn.addEventListener("click", bgChenge);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

const posts = [
  {
    img: "./img/one.jpg",
    title: "Trees",
    info: "If you are really interested in trees, read this article immediately",
    button: "Open",
    more: `Title: The Silent Giants: Exploring the Wonders of Trees

    Introduction
    
    In a bustling world full of towering skyscrapers and technological marvels, it's easy to overlook the silent giants that have been an integral part of our planet for millions of years - trees. These ancient and magnificent beings not only provide us with oxygen but also offer countless ecological, social, and aesthetic benefits. In this article, we will delve into the world of trees, exploring their vital role in the environment and their profound impact on human society.
    
    The Lifeblood of Our Planet
    
    Oxygen Production:
    Trees, often referred to as the "lungs of the Earth," play a crucial role in oxygen production. Through the process of photosynthesis, they convert carbon dioxide into oxygen, providing us with the very air we breathe. A single mature tree can produce enough oxygen to sustain two human beings for a year.
    
    Carbon Sequestration:
    Trees are natural carbon storage units. They absorb and store carbon dioxide, mitigating the effects of climate change by reducing greenhouse gases in the atmosphere. Forests act as a buffer against global warming, making the conservation and reforestation of trees a vital tool in the fight against climate change.
    
    Ecosystem Services
    
    Biodiversity:
    Trees are the cornerstone of ecosystems. They provide habitats and sustenance for a vast array of wildlife, from insects to birds and mammals. The intricate canopy of a tree is an entire microcosm of life, supporting a rich tapestry of biodiversity.
    
    Soil Health:
    Trees contribute to soil health by preventing erosion, improving soil structure, and increasing nutrient content. Their fallen leaves and decaying matter enrich the soil, supporting plant growth and fostering a healthier environment.`,
  },
  {
    img: "./img/three.jpg",
    title: "Lake",
    info: "If you are really interested in lakes, read this article immediately",
    button: "See More",
    more: `Title: Mirrors of Nature: The Wonders and Importance of Lakes

    Introduction
    
    Lakes, these serene and captivating bodies of water, have held a profound place in the natural world and human culture for millennia. They are far more than just picturesque scenes; they play vital roles in ecosystems, serve as sources of freshwater, and offer a myriad of recreational and cultural benefits. In this article, we will explore the beauty, significance, and challenges facing lakes, as well as their crucial role in our planet's ecosystems.
    
    The Diversity of Lakes
    
    Natural and Man-Made:
    Lakes can be classified as natural or man-made. Natural lakes are formed by geological processes, while man-made or artificial lakes are created by damming rivers or excavating land. Regardless of their origin, they offer various ecological and societal benefits.
    
    Diverse Ecosystems:
    Lakes support diverse ecosystems, including aquatic plants, fish, birds, and other wildlife. They serve as breeding grounds, feeding areas, and migratory stopovers for numerous species, making them essential hubs of biodiversity.
    
    Environmental Significance
    
    Water Storage:
    Lakes serve as natural reservoirs, storing freshwater and releasing it gradually, ensuring a steady supply of water for both human consumption and irrigation. This helps mitigate the effects of droughts and water shortages.
    
    Water Quality:
    Lakes play a crucial role in purifying water. They act as natural filters, removing pollutants and sediment, thus improving water quality. This is particularly important for drinking water sources and the health of aquatic ecosystems.
    
    Recreational and Cultural Value
    
    Tourism and Recreation:
    Lakes are popular destinations for boating, fishing, swimming, and other recreational activities. Their tranquil beauty and recreational opportunities draw tourists and offer local communities economic benefits.
    
    Cultural Significance:
    Many cultures around the world hold lakes in high regard for their spiritual and cultural significance. Lakes have often been the settings for myths, legends, and rituals, connecting people to the natural world and their heritage.
    
    Challenges and Conservation
    
    Pollution:
    Pollution from agricultural runoff, urban development, and industrial activities can harm lakes by introducing chemicals and nutrients that disrupt the balance of the ecosystem.
    
    Invasive Species:
    Invasive species, such as zebra mussels or non-native fish, can disrupt native ecosystems and harm water quality.
    
    `,
  },
  {
    img: "./img/four.jpeg",
    title: "Grass",
    info: "If you are really interested in grass, read this article immediately",
    button: "Open",
    more: `Title: The Unassuming Heroes: The Remarkable World of Grass

    Introduction
    
    In the vast tapestry of Earth's ecosystems, grass plays a humble yet indispensable role. While it may appear unremarkable at first glance, grass is a foundational component of ecosystems, providing a multitude of benefits to both nature and humanity. In this article, we will uncover the remarkable world of grass, exploring its ecological significance, its varied forms, and its vital contributions to our planet.
    
    The Diversity of Grass
    
    Botanical Diversity:
    Grass is a diverse and widespread plant family, known as Poaceae, comprising thousands of species. These species can range from short, fine blades to tall, robust stalks, adapting to a wide array of climates and environments.
    
    Economic Importance:
    Grasses include some of the world's most important crops, such as wheat, rice, and maize. These grains form the basis of human nutrition, making grasses a cornerstone of our global food supply.
    
    Ecological Significance
    
    Soil Stabilization:
    Grasses are crucial in preventing soil erosion. Their extensive root systems bind the soil together, helping to maintain its structure and preventing valuable topsoil from being washed away by wind and water.
    
    Biodiversity Support:
    Grasslands support a variety of wildlife. From grazing mammals like bison to nesting birds and insects, grass ecosystems provide essential habitat and food sources for numerous species.
    
    Carbon Sequestration:
    Grasses are efficient at capturing and storing carbon dioxide from the atmosphere. Their contribution to carbon sequestration aids in mitigating the impacts of climate change.
    
    Human Benefits
    
    Agricultural Production:
    Many of the world's staple foods come from grasses. Wheat, rice, corn, and sugarcane are just a few examples of grass crops that feed billions of people.
    
    Livestock Grazing:
    Grasses are a primary source of food for livestock, making them a critical component of the global meat and dairy industry.
    
    Aesthetic and Recreational Value:
    Grassy landscapes provide scenic beauty and recreational opportunities, from parks and golf courses to natural reserves. They are places for relaxation, leisure, and outdoor activities.
    
    Challenges and Conservation
    
    Habitat Loss:
    As human populations expand, grasslands are often converted into agricultural and urban areas. This leads to habitat loss for many species and can disrupt the balance of ecosystems.
    
    Invasive Species:
    Some invasive grass species can outcompete native plants, leading to reduced biodiversity and altering the structure of ecosystems.`,
  },
  {
    img: "./img/two.webp",
    title: "Forest",
    info: "If you are really into surviving, read this article immediately",
    button: "Read",
    more: `Introduction

    Forests, often referred to as the lungs of the Earth, hold an air of mystique and immense ecological significance. These intricate and diverse ecosystems provide habitat for countless species, regulate climate, offer resources, and bestow a profound sense of tranquility and inspiration upon humanity. In this article, we will delve into the enchanting world of forests, exploring their ecological roles, cultural significance, and the challenges they face in a rapidly changing world.
    
    The Rich Tapestry of Forests
    
    Types of Forests:
    Forests come in a myriad of forms, from tropical rainforests teeming with life to temperate forests with their seasonal beauty, and from boreal forests of the north to dry, scrubby woodlands. Each forest type has unique characteristics and inhabitants.
    
    Ecosystem Diversity:
    Forests are not monolithic environments but are incredibly diverse ecosystems. They house a vast array of plant and animal species, many of which are found nowhere else on Earth.
    
    Ecological Significance
    
    Carbon Storage:
    Forests act as massive carbon sinks, sequestering carbon dioxide from the atmosphere and mitigating climate change. They play a critical role in regulating the global carbon cycle.
    
    Biodiversity Hotspots:
    Forests are often considered biodiversity hotspots, harboring a wealth of species. They offer habitats for an astonishing variety of wildlife, from the smallest insects to the largest mammals.
    
    Water Cycle Regulation:
    Forests play a pivotal role in the water cycle. They absorb and release water gradually, helping to prevent floods and droughts, while also maintaining water quality by filtering pollutants.`,
  },
];


const postsWeb = document.querySelector(".multiple-items");

postsWeb.innerHTML = posts.map((el) => `
  <div class="post">
    <img src="${el.img}" alt="">
    <h3 class="date">${currentDate}</h3>
    <div class="content">
      <h1>${el.title}</h1>
      <p class="info">${el.info}</p>
      <button class="btn">${el.button} <i class="fa-solid fa-angles-right"></i></button>
      <p class="hidden">${el.more}</p>
    </div>
  </div>
`);

const buttons = document.querySelectorAll(".btn");
const hiddenText = document.querySelectorAll(".hidden");


const openClose = (event) => {
    const button = event.currentTarget;
    const index = Array.from(buttons).indexOf(button);
    const text = hiddenText[index];
  
    if (text.style.display === "none" || text.style.display === "") {
      text.style.display = "block";
      button.innerText = "Close";
    } else {
      text.style.display = "none";
      button.innerText = "ReOpen";
    }
  };
  
  buttons.forEach((button) => {
    button.addEventListener("click", openClose);
  });
  