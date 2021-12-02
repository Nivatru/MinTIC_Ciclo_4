let operaciones=[];
let balance= 0;
let metaAhorro= 0;

const registrarOperacion = (monto, tipo, categoria, fecha) => {
    operaciones.push({
        monto, tipo,categoria, fecha
    });
    if (tipo=="ingreso"){
        balance+=monto;
    } else {
        balance-=monto
    }

    localStorage.setItem('operaciones', JSON.stringify(operaciones));
    localStorage.setItem('balance', JSON.stringify(balance));
}

const registrarMetaAhorro = (meta) => {
    localStorage.setItem('metaAhorro', JSON.stringify(meta));
    metaAhorro = meta;
}

const estaMiMetaCumplida = () => {
    let balance = parseInt(localStorage.getItem('balance'));

    if(metaAhorro < balance) {
        return "cumple";
    }
    return "no cumple";

}

module.exports.registrarOperacion= registrarOperacion;
module.exports.registrarMetaAhorro = registrarMetaAhorro;
module.exports.estaMiMetaCumplida = estaMiMetaCumplida;

