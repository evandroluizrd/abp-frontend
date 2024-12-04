export async function TesteLogin(Username, Password){

    if((Username == "Hian") && Password == "1234"){
        return{Username};
    }
    throw new Error('Usuario ou senha invalidos');
}

