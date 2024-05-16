function calculateInterest() {
    let typeInt =String(document.querySelector('input[name="typeInt-two"]:checked').value);
    let calcValue =Number(document.getElementById('value-calculated-two').value);
    let vPres =Number((document.getElementById("presentVal-two").value).replace(/[.,;]/g, '')); 
    let vFut =Number((document.getElementById("futureVal-two").value).replace(/[.,;]/g, '')); 
    let interest =parseFloat(((document.getElementById("interest-two").value).replace(/[%]/g, ''))/100); 
    let period =String(document.getElementById("period-two").value); 
    let time=Number(document.getElementById("time-two").value); 

    if (!typeInt && !calcValue) {
        alert("Falta elegir una opción");
    }

    let pValue;
    let fValue;
    let n;
    let m;
    let int;
    let effective;
    let year;

        if (period === "Mensual") {
            effective = interest / 12;
            m = time / 12;
        } else if (period === "Bimestral") {
            effective = interest / 6;
            m = time / 6;
        } else if (period === "Trimestral") {
            effective = interest / 3;
            m = time / 3;
        } else if (period === "Semestral") {
            effective = interest / 2;
            m = time / 2;
        } else if (period === "Anual") {
            effective = interest;
            m = time;
        }
        document.getElementById("effectiveRate-two").value = (effective * 100).toFixed(2);

        if (calcValue === 1) {
            pValue = typeInt === "simple" ? vFut / (1 + interest * time) : vFut / Math.pow((1 + interest), m);
            document.getElementById("presentVal-two").value = pValue.toLocaleString();

        } else if (calcValue === 2) {
            fValue = typeInt === "simple" ? vPres * (1 + interest * time) : vPres * Math.pow((1 + interest), m);
            document.getElementById("futureVal-two").value = fValue.toLocaleString();

        } else if (calcValue === 3) {
            n = typeInt === "simple" ? (1 / interest) * (vFut / vPres - 1) : Math.log(vFut / vPres) / Math.log(1 + interest);
            document.getElementById("time-two").value = Math.round(n);

        } else if (calcValue === 4) {
            int = typeInt === "simple" ? ((vFut / vPres - 1) / time)*100 : (Math.pow(vFut / vPres, (1 / time)) - 1)*100;
            document.getElementById("interest-two").value = int.toFixed(2);

            if (period === "Mensual") {
                effective = int / 12;
            } else if (period === "Bimestral") {
                effective = int / 6;
            } else if (period === "Trimestral") {
                effective = int / 3;
            } else if (period === "Semestral") {
                effective = int / 2;
            } else if (period === "Anual") {
                effective = int;
            }
            document.getElementById("effectiveRate-two").value = (effective * 100).toFixed(2);
        }

        year = time ? Math.round(time) / 12 : Math.round(n) / 12;
        document.getElementById("years-two").value = year.toFixed(2);
}