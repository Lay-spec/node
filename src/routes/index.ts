import {Router, Request,Response, RequestHandler}from 'express'
import {Server} from 'http'

const router = Router()

router.get('/',(req: Request,res: Response) => {
    res.send("Home")
})

//criando o middwer
//quando usamos o middlware utilizamos o 'next'

const interferir: RequestHandler = (reg, res, next) =>{
  let logged = false
  if(logged) {
    next
  }else{
    res.status(404)
  }

    next
}
//rota estática
router.get('/contatos',interferir,(req:Request,res:Response)=>{
    console.log("Executou a página de contatos")
    res.send("Aqui é a página de contato")
})
//rota estática
router.get('/sobre',(req:Request,res:Response)=>{

    res.send("Sobre nós")
})

//rota dinâmica
router.get('/noticia/:slug',(req:Request,res:Response)=>{
    let slug: string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get('/voo/:origem-:destino',(req:Request,res:Response)=>{
    let {origem , destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})



//gerar o servidor na porta 3000
export default router
