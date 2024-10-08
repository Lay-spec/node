//importando o express
import express, {Request, Response} from 'express'
import mainRoutes from './routes/index'
import path from 'path'


//usando express
const server = express()

//configuracao da pasta public
server.use(express.static(path.join(__dirname,  'public')))

//inserindo a rota no servidor
server.use(mainRoutes)

//pagin aão encontrada
server.use((req:Request, res:Response) => {
    res.status(404).send("Página não encontrada")
}
)

//gerar o servidor na porta 3000
server.listen(3000)


