const END = "AV PERIMETRAL, QUADRA 01, N 14/15"
const END_MUNICIPIO = "Rosário, Correntina - BA"
const END_CEP = "CEP: 47.650-000"



function DadosEndereco(){
    return(
        <div>
        <h1>Valmax Comércio e Representações LTDA.</h1>
        <p>{END}</p>
        <p>{END_MUNICIPIO}</p>
        <p>{END_CEP}</p>

        <div>
            <p>Oficina</p>
            <p>Loja de Peças</p>
            <p>Wi-fi</p>
            <p>Sala de espera</p>
        </div>
        </div>
        

    )
}

export default DadosEndereco