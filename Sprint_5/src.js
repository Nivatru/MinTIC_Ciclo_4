const valorDeIngresos = async() => {
    let operacionesRegistradas = [];
    let ingresos = 0;
    let response = await fetch ("https://misiontic2022upb.vercel.app/api/personal-finance/operations");

    operacionesRegistradas = await response.json();

    for (let i=0; i<operacionesRegistradas.length; i++){
        if(operacionesRegistradas[i]['tipo']=='ingreso'){
            ingresos = ingresos + parseInt(operacionesRegistradas[i]['monto']);
        }
    }
    return(ingresos);
}
module.exports.valorDeIngresos= valorDeIngresos;
