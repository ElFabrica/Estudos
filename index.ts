/*
🔥 Desafio Avançado – Sistema de Reservas de Hotel
🎯 Objetivo:
Criar um sistema de reservas de hotel onde é possível:

Cadastrar quartos (Quarto) com tipo (Ex: solteiro, casal, suíte), número, valor por noite e disponibilidade.

Fazer uma reserva informando nome do hóspede, número do quarto e quantas noites.

Listar reservas feitas.

Calcular o valor total pago por um hóspede.

    enum tipoDeQuarto{
        Solteiro,
        Suíten,
        Casal
    }
interface quarto{
    id: string
    name: string
    Tipo: tipoDeQuarto
    numeroDoQuarto: string
    valorPorNoite: number
    disponibilidade: string
}
interface Reserva{
    idQuarto: string
    hospede: string
    noitesReservadas: string
}


function criarSistemaHotel<T>(){
    const quartos: quarto[] = []
    const reservas: Reserva[] = []

    return{
        AdicionarQuarto(quarto: quarto){
            quartos.push(quarto)
            console.log(`Quarto cadastrado`)
        },
        reservarQuarto(idQuarto: string, hospede:string, noitesReservadas: string){
            const myQuarto = quartos.find(item => item.id === idQuarto)
            if (!myQuarto) {
                console.log(`Quarto não encontrado`)
                return
            }
            const reserva: Reserva = {
                idQuarto: myQuarto.id,
                hospede: hospede,
                noitesReservadas: noitesReservadas
            }
            reservas.push(reserva)
            console.log(`Quarto ${myQuarto.name} reservado com sucesso!`)
            myQuarto.disponibilidade = "indisponível"

            
        },
         listarReservas(): void{
            reservas.forEach(reserva =>{
                const myQuarto = quartos.find(item => item.id === reserva.idQuarto)
                console.log(`Hospede: ${reserva.hospede}\nquarto: ${myQuarto?.name}\nNúmero do quarto: ${myQuarto?.numeroDoQuarto}\nquantas noites: ${reserva.noitesReservadas}`)

            })
            const soma = reservas.reduce((acumulador,numeroAtual)=>{
                const myQuarto = quartos.find(item => item.id === numeroAtual.idQuarto)
                if (!myQuarto) {
                    console.log(`Item não encontrado`)
                    return acumulador
                }
                return  acumulador + myQuarto.valorPorNoite
            }, 0)
            console.log(`Soma dos valores hospedados: ${soma}`)
        }
    }
}

function promptValidSituition() {
    let myoptin = 0

    while(myoptin != 4){
        const menu = `Menu
        1- Registrar quarto
        2- Reservar quarto
        3- Listar reservas feitas
        4- Fechar Programa`


        myoptin = Number.parseInt(prompt(menu))
    }
}

*/