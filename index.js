const express=require('express')
const request=require('request')

const app=express()
//analizador de cuerpo, es para decirlque que recibiremos json
app.use(express.json())


   
//EJERCICIO 1 *****************************************************************************
app.get('/api',(req,res)=>{
res.send({'mensaje':'Hola mundo', 'statuscode':res.statusCode})
})

//EJERCICIO 2 *****************************************************************************
app.get('/api/suma',(req,res)=>{
    console.log(req.params)
    const num1= req.query.num1
    const num2= req.query.num2
    const respuesta = Number(num1)+ Number(num2)
    res.send({'respuesta':respuesta, 'statuscode':res.statusCode})    
    }) 
    

//EJERCICIO 3 *****************************************************************************
app.get('/api/usuario/:usuario',(req,res)=>{
const nombre=req.params.usuario
res.send({'usuario':nombre})
})

//EJERCICIO 4 *****************************************************************************
//instalar e importar request
app.get('/api/swapi/:numpersonaje',(req,res)=>{
    const numper=req.params.numpersonaje
    console.log(numper)
    request(`https://swapi.dev/api/people/${numper}`,(err,response,body)=>{
        const personajes=JSON.parse(body)
        res.send({'Personaje':{...personajes}})

        // console.log('error',err)
        // console.log('res',res)
        console.log('body',body)
    })
    // res.send({'usuario':nombre})
    })


//EJERCICIO 5 *****************************************************************************
app.put('/api/body',(req,res)=>{
    console.log('req',req)
    const body=req.body
    console.log(body)
    res.send({'usuario':body})
    
    })


//EJERCICIO 6 *****************************************************************************
app.post('/api/suma',(req,res)=>{
    console.log(req.body)
    const num1= req.body.num1
    const num2= req.body.num2
    const respuesta = Number(num1)+ Number(num2)
    res.send({'respuesta':respuesta, 'statuscode':res.statusCode})    
    }) 

//EJERCICIO 7 *****************************************************************************
app.delete('/api/delete/:num',(req,res)=>{
const id = Number( req.params.num)
if(id === 3){
    res.send({'Mnesaje':`se ha eliminado el objeto con ID ${id}`,'statuscode':res.statusCode})
}else {
    res.send({'Mnesaje':` No se encontró el objeto con el ID especificado ${id}`,'statuscode':404})
}
})



//SERVER
app.listen(3000,'localhost',()=>{
    console.log('servidor up 💻 ')
})

