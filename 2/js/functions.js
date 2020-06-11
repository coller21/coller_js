let promptInt = (p) => {
    let s = prompt(p);
    return (Number(s).toString() != 'NaN' && s != '') ? Number(s) :  false;
 }
