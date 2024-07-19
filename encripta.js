'buttons Js code- desencriptar copiar'

const encriptationKeys = {a:'ai', e:'enter', i:'imes', o:'ober', u:'ufat'}

function main() {
    const encryptButton = document.getElementById('encrypt');
    encryptButton.addEventListener('click',validate);  
    const decryptButton = document.getElementById('decrypt');
    decryptButton.addEventListener('click',decrypt); 
    const copyButton = document.getElementById('copy');
    copyButton.addEventListener('click',copy);
}

function validate(){
    console.log('llamado a la validacion');
    let encrypted = '';
    input = document.getElementById('input__txt' );
    if (input.value === ''){
        return 0
    }
    baseTxt = input.value; //para los inputs usar .value
    encrypted = encrypt(baseTxt);
}

function encrypt(baseTxt){
    console.log('llamado a la encriptacion');
    let encrypted ='';
    for (let i=0; i<=baseTxt.length; i++){
        let myKey = baseTxt[i];
        if(Object.keys(encriptationKeys).includes(myKey)){
            encrypted += encriptationKeys[myKey];
        }else{
            encrypted += myKey;
        }
    } 
    output(encrypted);
}

function decrypt(){
    console.log('llamado a la decriptacion');
    let textoDesencriptado = '';
    input = document.getElementById('input__txt' );
    if (input.value === ''){
        return 0
    }
}

function output(encrypted){
    console.log('llamado a la salida');
    txtOutput = document.getElementById('output__txt');
    txtOutput.textContent = encrypted;
    // para los p span div usar textContent o innertext
    // el primero se hereda a los hijos y no cambia formato
}

function copy(){}

function alerts(){}
