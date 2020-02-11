const func = []

for (var i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[2]()
func[9]()

const funcLet = []

for (let i = 0; i < 10; i++){
    funcLet.push(function(){
        console.log(i)
    })
}

funcLet[2]()
funcLet[9]()