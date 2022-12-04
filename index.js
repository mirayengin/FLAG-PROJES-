
const selectDiv = document.querySelector("select");

const cardDiv = document.querySelector(".countrycards");
console.log(cardDiv);

const containerDiv = document.querySelector(".container");

const getCountry = async () => {
  const url = "https://restcountries.com/v2/all";

  const writerCountry = await axios(url); //! json formatında alındı ülkeler
  console.log(writerCountry);

  const statusText = writerCountry.statusText; //! datalar inmiş mi kontrol etmekk için
  console.log(writerCountry.statusText);

  const countryInfo = writerCountry.data; //! ülkelerin içinde olduğu array
  console.log(countryInfo);

  //! ülkelerin isimleri select te basıldı
  countryInfo
    .map((element) => element.name)
    .forEach((element) => {
      selectDiv.innerHTML += `<option >${element}</option>`;
    });

  selectDiv.addEventListener("change", (e) => {
    //! select te seçilen ülkenin bilgileri alındı
    const selectedCountry = countryInfo.filter(
      (item) => item.name == e.target.value
      );
      console.log(selectedCountry);
      
      //! Seçilen ülkenin bilgilerinden istediğimizi aldık
      const {
        name,
        flags: { svg },
        capital,
        region,
        languages,
        currencies,
        alpha3Code,
    } = selectedCountry[0];
    
   
    console.log(containerDiv.classList)
    console.log(containerDiv.classList.remove(containerDiv.classList.item(1)))
    console.log(containerDiv.classList.add(`${region}`))
    console.log(containerDiv.classList)

 

      
      //!Seçilen ülkeler ekrana yazdırlıyor
      cardDiv.innerHTML = `            
        <div class="card" style="width: 20rem;">
        <img src="${svg}" class="card-img-top" alt=".">
        <div class="card-body">
          <h5 class="card-title">${name},    ${alpha3Code}</h5>
    
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> <i class="fa-sharp fa-solid fa-earth-oceania"></i>
          ${region}</li>
          <li class="list-group-item"> <i class="fa-solid fa-landmark-flag"></i>
          ${capital}</li>
          <li class="list-group-item"> <i class="fa-sharp fa-solid fa-globe"></i>  ${
            Object.values(languages)[0].name
          }</li>
          <li class="list-group-item"> <i class="fa-sharp fa-solid fa-money-bills"></i>  ${
            Object.values(currencies)[0].name
          },   ${Object.values(currencies)[0].symbol}</li>
    
        </ul>
    
      </div>`;
  });
};

getCountry();
