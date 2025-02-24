import { Titulo } from "./Titulo"

export const TituloAlternativo = ({condicion})=> {

    if(condicion){
        return <>
    <Titulo titulo={"Titulo alternativo"}/>
    </>
    }
    return <>
<Titulo titulo={"Titulo nuevo"}/>

</>
}