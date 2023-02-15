
// prvni cast ukolu


const title = {
  name: "Fear and Loathing in Las Vegas",
}

console.log(title.name.length);

console.log(title.name.toUpperCase());

console.log(title.name.slice(+ 5));

console.log(title.name.slice(title.name, - 5));




// druha cast ukolu


document.getElementById("button").addEventListener("click", zadejMail);


function zadejMail() { 
  let email = prompt("Zadej svůj e-mail");

    while (email === "" ) {
      alert("To není platný e-mail :(")
      email = prompt("Zadej svůj e-mail")
    }

  let atIndex = email.indexOf("@");


  const user = {
    userName: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1)
  }

  document.body.innerHTML += "<p>Tvoje jméno:" + " " + user.userName + "</p" + "<br><p>Tvoje mailová doména:" + " " + user.domain + "</p>";   
}



// treti cast ukolu


document.getElementById("next__button").addEventListener("click", zadejAdresu);


function zadejAdresu() {

  let ulice = prompt("Zadej svou ulici");
  
    while (ulice === "" ) {
      alert("To není platná ulice")
      ulice = prompt("Zadej svou ulici");
    }

  let cisloDomu = prompt("Zadej číslo domu");

    while (cisloDomu === "" || isNaN(cisloDomu)) {
      alert("To není platné číslo domu")
      cisloDomu = prompt("Zadej číslo domu");
    }
  
  let psc = prompt("Zadej poštovní směrovací číslo");

    while (psc === "" || isNaN(psc)) {
      alert("To není platné poštovní směrovací číslo")
      psc = prompt("Zadej poštovní směrovací číslo");
    }
    

  document.getElementById("empty__field").innerHTML = `<address>
                                                          <p>Adresa uživatele: ${ulice} ${cisloDomu}</p>
                                                          <p>PSČ uživatele: ${psc}</p>
                                                       </address>`
}