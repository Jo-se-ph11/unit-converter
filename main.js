/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("myInput");
const convertBtn = document.querySelector(".btn");
const length_para = document.getElementById("length-para");
const volume_para = document.getElementById("volume-para");
const mass_para = document.getElementById("mass-para");

convertBtn.addEventListener("click", () => {
    console.log(userInput.value);
    getLength(Number(userInput.value));
    getVolume(Number(userInput.value));
    getmass(Number(userInput.value));
})


  function getLength(myNum) {
    let feets = `${myNum}` * 3.281;
    feets.toFixed(2);
    let meters =  `${myNum}` /  3.281;
    meters.toFixed(2);
    const result = `${myNum} meters = ${feets} feets | ${myNum} feets = ${meters} meters`;
    length_para.textContent = result;
  }

  function getVolume(myNum) {
    let gallon = `${myNum}` * 0.264;
    gallon.toFixed(2);
    let liters =  `${myNum}` /  0.264;
    liters.toFixed(2);
    const result = `${myNum} liters = ${gallon} gallons | ${myNum} gallons = ${liters} liters`;
    volume_para.textContent = result;
  }

  function getmass(myNum) {
    let pound = `${myNum}` * 2.204 ;
    pound.toFixed(2);
    let kilogram =  `${myNum}` /  2.204;
    kilogram.toFixed(2);
    const result = `${myNum} kilos = ${pound} pounds| ${myNum} pounds = ${kilogram} pounds`;
    mass_para.textContent = result;
  }

