
  require('babel-register')
  const mysql=require('mysql')
  // pemet d'affiche les infos dans le body
  const func=require('./function')
  const bodyParser = require('body-parser');
  const express= require('express');
  const app = express();

//  creation de page avec express//

const db=mysql.createConnection({
   host:'localhost',
   database:'nodejs',
   user:'root',
   password:'',
   

 })

db.connect((err)=>{// connection 
   if(err)
      console.log(err.message)
    else{
  console.log('Connected.')
    
         app.use(bodyParser.json());
         app.use(bodyParser.urlencoded({

          extended: true }));

   // les rutes  recuperation d'un membre  ID+ verification si l'ID existe ///
      app.get('/api/v1/membre/:id',(req,res)=>{  
             db.query('SELECT *FROM membre WHERE id=?', [req.params.id],(err,result)=>{
                 if(err){

                  res.json(func.error(err.message))
                 }else {

                   if(result[0]!=undefined){//si l'id n'existe pas!

                   res.json(func.success(result))
                   } else{

                  res.json(func.error("Cette id ne correspond pas à une prsonne!"))

                   }
                 
                  }
             })
        })

   //  recuperation de tous les membre //

   app.get('/api/v1/membre/',(req,res)=>{
      if(req.query.max!=undefined&&req.query.max>0)
      {  
         
        db.query('SELECT *FROM membre LIMIT 0,?',[req.query.max],(err,result)=>{
          if(err){


             res.json(func.error(err.message))
          }else
          {
           res.json(func.success(result))

          }

      })

         res.json(func.success(membre.slice(0,req.query.max)))
        }
        else if(req.query.max!= undefined) 
        {

         res.json (func.error('Mauvaise valeur'))
        }
      
        else
       {
                // rcuperation d'un membre////
        db.query('SELECT *FROM membre',(err,result)=>{
          if(err){


             res.json(func.error(err.message))
          }else
          {
           res.json(func.success(result))
          }
      })
    }
 })

  

// INSERTION EN BASE DE DONNEESS ///

  app.post('/api/v1/membre',(req,res)=>{ 

        if(req.body.name&&req.body.commande)
         db.query('SELECT*FROM membre WHERE commande=?',[req.body.commande],(err,result)=>{
         if(err)  {
           res.json(func.error(err.message))
          }else 
          {

            if(result[0]!= undefined)
            {
             res.json(func.error('La commande  existe deja'))

            }  else
              {

            db.query('INSERT INTO membre (name,commande) VALUES(?,?)',[req.body.name],[req.body.commande],(err,result)=>{

              if(err){
              
                res.json(func.error(err.message))

              } 
              else{

                  db.query('SELECT *FROM membre WHERE commande=?',[req.body.commande],(err,result)=>{

                      if(err) 
                      {
                        res.json(func.error(err.message))
                      }
                      else
                      {

                        res.json(func.success({
                           
                           id: result[0].id,
                           name:result[0].name,
                           //surnname:result[0].surname,
                           commande:result[0].commande
                           //date_commande:result[0].date_commande

                        }))

                      }

                  })

               }
            }) 

          }

      }         
   })    

})




        //  Mise à jour d'un membre+// verifie si l'ID EXIST dans le tableau  ///
      app.put('/api/v1/membre/:id',(req,res)=>{
                
                 //db.query('SELECT*FROM membre WHERE id=?',[req.params.id],(res,))

              let index=getindex(req.params.id)
                if(typeof(index)=='string'){
         
                res.json(func.error(index))
            } else{

            ///  si l'ID existe dans mon tableau  alors je recupère ses info //
               let same=false
             for (let i=0;i<membre.length;i++){
                  
                         if(req.body.name == membre[i].name &&req.params.id != membre[i].id){ 
                            same=true
                            break
                         }
            }

                  if(same)
                   {
                   res.json(func.error('le nom existe deja!'))

                   } else 
                   {

                     membre[index].name=req.body.name 
                     res.json(func.success(true));
                   }
       }    
    
   })

   

   // supprimer un membre ///
   app.delete('/api/v1/membre/:id',(req,res)=>{
             ///  verifier si l'ID existe ///
          let index=getindex(req.params.id)
            if(typeof(index)=='string'){
                res.json(func.error(index))
               } else
               {

                 membre.splice(index,1)
                 res.json(func.success(membre))
               }  

   })


app.listen(8080,() =>{ console.log('demarrer')})

   
   }
 
 })


      // ajouter body-pharser//

 		     

 let  MembreRouter= express.Router()




    // function verification de l'ID//
function getindex(id)
{

   for (let i=0;i<membre.length;i++){

     if(membre[i].id==id)

      return i

     

   }
    return 'id n existe pas'

}

function getID(){

  return membre[membre.lenght-1].id+1

}






 