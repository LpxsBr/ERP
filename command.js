import fs from 'fs'
import rd from 'readline'

console.clear();

const input = rd.createInterface({
    input: process.stdin,
    output: process.stdout
})

// console.log(process.argv.slice(2))

var opt = process.argv.slice(2)[0]

const option = {
    controller: 'Type the Controller name with lowercase',
    model: 'Type the Model name with lowercase'
}

input.question(`

${option[opt]}

`, (valor) => {

    if (opt == 'controller') {
        fs.writeFileSync(`./src/App/Controllers/${valor}Controller.js`,
`import Controller from "./Controller"

export default new class NovoTesteController extends Controller {
        index(){
                return 'index';
        }
}`)
    }


    if (opt == 'model') {
        fs.writeFileSync(`./src/App/Models/${valor}Models.js`,
`import Models from "./Models"

export default new class NovoTesteModels extends Models {
        index(){
                return 'index';
        }
}`)
    }


    input.close()

})