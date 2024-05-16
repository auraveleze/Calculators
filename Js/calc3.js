function calculateUniformPay() {
    let calcValue =Number(document.getElementById('value-calculated-three').value);
    let interest =parseFloat(((document.getElementById("interest-three").value).replace(/[%]/g, ''))/100); 
    let time=Number(document.getElementById("time-three").value); 
    let vPres =Number((document.getElementById("presentVal-three").value).replace(/[.,;]/g, '')); 
    let annuity =Number((document.getElementById("annuity-three").value).replace(/[.,;]/g, '')); 
    let vFut =Number((document.getElementById("futureVal-three").value).replace(/[.,;]/g, '')); 

    if (!calcValue) {
        alert("Falta elegir una opción");
    }

    let pValue;
    let fValue;
    let pfit;
    let antyP;
    let antyF;

        if (calcValue === 1) {
            pValue = annuity * ((Math.pow((1 + interest), time) - 1) / (interest * Math.pow((1 + interest), time))); 
            document.getElementById("presentVal-three").value = pValue.toLocaleString();

        } else if (calcValue === 2) {
            fValue = annuity * ((Math.pow((1 + interest), time) - 1) / interest);
            pfit = vFut - (annuity * time);
            document.getElementById("futureVal-three").value = fValue.toLocaleString();
            document.getElementById("profit-three").value = pfit.toLocaleString();

        } else if (calcValue === 3) {
            antyP = vPres * (interest * Math.pow((1 + interest), time)) / (Math.pow((1 + interest), time) - 1);
            document.getElementById("annuity-three").value = antyP.toLocaleString();

        } else if (calcValue === 4) {
            antyF = vFut * (interest / (Math.pow((1 + interest), time) - 1));
            document.getElementById("annuity-three").value = antyF.toLocaleString();
        }
}