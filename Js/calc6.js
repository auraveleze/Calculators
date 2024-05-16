function calculator() {
    let typeInt =String(document.querySelector('input[name="typeInt-six"]:checked').value);
    let interest =parseFloat(((document.getElementById("interest-six").value).replace(/[%]/g, ''))/100); 
    let period =String(document.getElementById("period-six").value); 
    let vPres =Number((document.getElementById("presentVal-six").value).replace(/[.,;]/g, '')); 
    let time=Number(document.getElementById("time-six").value); 

    if (!typeInt && !calcValue) {
        alert("Falta elegir una opción");
    }

    let fValue;
    let m;
    let n = 1;
    time = time / 12;
    document.getElementById("years-six").value = time.toFixed(2);

    if (typeInt === "nominal") { 
        n = n / 12;
        if (period === "Mensual") {
            m = 12 / 12;
        } else if (period === "Bimestral") {
            m = 12 / 6;
        } else if (period === "Trimestral") {
            m = 12 / 4;
        } else if (period === "Cuatrimestral") {
            m = 12 / 3;
        } else if (period === "Semestral") {
            m = 12 / 2;
        } else if (period === "Anual") {
            m = 12 / 1;
        }

        fValue = vPres * Math.pow((1 + (interest / m)), (n * m));
        document.getElementById("futureVal-six").value = fValue.toLocaleString();
        
    } else if (typeInt === "effective") { 
        n = n / 12;
        fValue = vPres * Math.pow((1 + interest), n);
        document.getElementById("futureVal-six").value = fValue.toLocaleString();
    } 
}