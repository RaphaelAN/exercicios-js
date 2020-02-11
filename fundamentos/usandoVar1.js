{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) //vizivel fora do bloco, escopo global


function teste(){
    var local = 123
    console.log(local)
}

//console.log(local) nao eh vizivel fora da funcao

