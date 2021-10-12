let myInput = document.getElementById('myin');
const searchBtn = document.getElementById('search');
const totalCases= document.getElementById('totalCases');
const countryFlag = document.getElementById('countryy');
const todayCases = document.getElementById('todaycases');
const totalDeaths = document.getElementById('totaldeaths');
const todayDeaths = document.getElementById('todaydeaths');
const totalRecoverd = document.getElementById('totalrecoverd');
const todayRecovered = document.getElementById('todayrecovered');
const activeCases = document.getElementById('active');
const criticalCases = document.getElementById('critical');
const test = document.getElementById('tests');

let myData;

function displayData(){
    totalCases.textContent=`TOTAL CASES ${myData.cases}`;
    console.log(myData.countryInfo.flag)
    countryFlag.setAttribute('src',myData.countryInfo.flag)
    todayCases.innerHTML=`TODAY CASES<br>${myData.todayCases}`;
    totalDeaths.innerHTML=`TOTAL DEATHS<br>${myData.deaths}`;
    todayDeaths.innerHTML=`TODAY DEATHS<br>${myData.todayDeaths}`
    totalRecoverd.innerHTML=`Total Recovered<br>${myData.recovered}`
    todayRecovered.innerHTML=`Today Recovered<br>${myData.todayRecovered}`
    activeCases.innerHTML=`ACTIVE CASES<br>${myData.active}`;
    criticalCases.innerHTML=`CRITICAL CASES<br>${myData.critical}`;
    test.innerHTML=`TOTAL TESTED<br>${myData.tests}`

    
    
}

async function covidApi(){
    const apiUrl = `https://corona.lmao.ninja/v2/countries/${myInput.value}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    myData = data;
    displayData();
}
if(!myInput.value){
    myInput.value='pakistan';
    covidApi();
    // when click on search icon this function will trigger
    searchBtn.addEventListener('click',()=>{
        covidApi();
    });
    
}

myInput.addEventListener('keyup',(event)=>{
         var x= event.key;
         if(event.key==='Enter'){
             covidApi();
         }
})

   
