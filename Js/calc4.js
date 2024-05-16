function calculateLoan(){
    document.getElementById("tableBody").innerHTML="";
    let amount=Number((document.getElementById("amount-four").value).replace(/[.,;]/g, '')); 
    let interest=Number(document.getElementById("interest-four").value); 
    let time=Number(document.getElementById("time-four").value); 

    if(amount>0){   
        mont=0;
        quote=0;
        int=0;
        cred=0;
        imp=amount;
        
        i = interest/100;
        tquote = 0;
        tint = 0;
        tcred = 0;

        for(t=0;t<=time;t++){
            document.getElementById("tableBody").innerHTML=document.getElementById("tableBody").innerHTML +
                `<tr>
                    <td>${t}</td>
                    <td>${mont.toLocaleString()}</td>
                    <td>${quote.toLocaleString()}</td>
                    <td>${int.toLocaleString()}</td>
                    <td>${cred.toLocaleString()}</td>
                    <td>${imp.toLocaleString()}</td>
                </tr>`;

            mont = Number((imp).toFixed(2));
            quote = Number((amount * ((i*Math.pow((1+i),time)) / (Math.pow((1+i),time)-1))).toFixed(2));
            int = Number((mont * i).toFixed(2)); 
            cred = Number((quote - int).toFixed(2));
            imp = Number(mont - cred);
            
            tquote += Number(quote);
            tint += Number(int);
            tcred += Number(cred);
        }

        document.getElementById("t1").innerHTML= tquote.toLocaleString();
        document.getElementById("t2").innerHTML= tint.toLocaleString();
        document.getElementById("t3").innerHTML= tcred.toLocaleString();
    }else{
        alert("Falta ingresar un número");
    }
}