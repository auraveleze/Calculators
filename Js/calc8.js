function calculateDiscount() {
    let typeDisc =String(document.querySelector('input[name="typeDisc-eight"]:checked').value);
    let tsMonthly =parseFloat(((document.getElementById("toDiscount-eight").value).replace(/[%]/g, ''))/100); 
    let vNom =Number((document.getElementById("nominalVal-eight").value).replace(/[.,;]/g, '')); 
    let time=Number(document.getElementById("time-eight").value); 

    if (!typeDisc && !vNom) {
        alert("Falta elegir una opción");
    }

    let vPres;
    let vDisc;

    if (typeDisc === "simple") { 
        vPres = vNom * (1 - tsMonthly * (time/30));
        vDisc = vNom - vPres;
        
    } else if (typeDisc === "compound") { 
        vPres = vNom * (Math.pow((1 - tsMonthly), (time/30)));
        vDisc = vNom * (1-(Math.pow((1 - tsMonthly), (time/30))));
    } 
        document.getElementById("presentVal-eight").value = vPres.toLocaleString();
        document.getElementById("discountVal-eight").value = vDisc.toLocaleString();
}