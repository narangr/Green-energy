function preloader() {
    const imagesList = [
          "./images/solar.jpg",
           "./images/biomass.jpg",
           "./images/hydro.jpeg"
        ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);

let buttonNum = document.querySelectorAll("button");

let commodity = {
    Solar: {
        headingName: "SOLAR ENERGY",
        bodyText: "Solar power is the energy from the sun which can be converted into thermal or electrical energy. Solar energy is a very flexible energy . Solar technologies can harness this energy for a variety of uses, including generating electricity, providing light or a comfortable interior environment and heating water for domestic, commercial or industrial use. If you’re looking to install solar in your home or business, we have a variety of resources to guide you at affordable budget.",
        imgUrl: "./images/solar.jpg",
        imgAlt: "Solar"
    },
    Biomass: {
        headingName: "BIOMASS ENERGY",
        bodyText: "Biomass is energy produced from renewable , biological sources such as biomass. Bioenergy is one pf the largest sources of renewable energy today ,providing heat, electricity and transportation fuels. It can e obtained from many forms of biofuels. These include liquid biofuels used to runmotor-vehicles and forest wood residue used to run mills and other industrial operations. To reduce the environmental impact, the biomass is available at a competitive cost.The quality of biomass must also be optimal for energy conversion and end use.",
        imgUrl: "./images/biomass.jpg",
        imgAlt: "Factory"
    },
    Hydroelectric: {
        headingName: "HYDROELECTRIC ENERGY",
        bodyText: "Hydroelectric energy, also called hydroelectric power or hydroelectricity, is a form of energy that harnesses the power of water in motion—such as water flowing over a waterfall—to generate electricity. People have used this force for millennia. Over two thousand years ago, people in Greece used flowing water to turn the wheel of their mill to ground wheat into flour. Hydropower plants can range in size from massive projects like the Hoover Dam to micro-hydroelectric power systems.Hydroelectric power is the cheapest source of renewable energy, at an average of $0.05 per kilowatt hour (kWh), but the average cost of developing new power plants based on onshore wind, solar photovoltaic (PV), biomass or geothermal energy is now usually below $0.10/kWh.",
        imgUrl: "./images/hydro.jpeg",
        imgAlt: "Dam"
    }
};

let data = document.getElementById("maincontent");

buttonNum[0].setAttribute("id", "active-button");

data.innerHTML = `<h1>${commodity.Solar.headingName}</h1>
     <img src="${commodity.Solar.imgUrl}" alt="${commodity.Solar.imgAlt}">
     <p>${commodity.Solar.bodyText}</p>`;

function handleSelection() {

    for (let i = 0; i < buttonNum.length; i++) {
        if (buttonNum[i].hasAttribute("id")) {
            buttonNum[i].removeAttribute("id");
        }
    }

    this.setAttribute("id", "active-button");

    for (let i = 0; i < buttonNum.length; i++) {
        if (buttonNum[i].hasAttribute("id")) {
            if (i == 0) {
                data.innerHTML = `<h1>${commodity.Solar.headingName}</h1><img src="${commodity.Solar.imgUrl}" alt="${commodity.Solar.imgAlt}"><p>${commodity.Solar.bodyText}</p>`;
            }
            if (i == 1) {
                data.innerHTML = `<h1>${commodity.Biomass.headingName}</h1><img src="${commodity.Biomass.imgUrl}" alt="${commodity.Biomass.imgAlt}"><p>${commodity.Biomass.bodyText}</p>`;
            }
            if (i == 2) {
                data.innerHTML = `<h1>${commodity.Hydroelectric.headingName}</h1><img src="${commodity.Hydroelectric.imgUrl}" alt="${commodity.Hydroelectric.imgAlt}"><p>${commodity.Hydroelectric.bodyText}</p>`;
            }
        } 
    }
} 

for (let i = 0; i < buttonNum.length; i++) {
    buttonNum[i].addEventListener("click", handleSelection)
}
