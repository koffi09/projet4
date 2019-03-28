<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-1.11.1.js">
    </script>
    <script src="js/bootstrap.min.js"></script>
    <!-- police font-->
     <link href="https://fonts.googleapis.com/css?family=Patrick+Hand" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet">
     <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Patrick+Hand" rel="stylesheet">
     <title>Accueil</title>
  </head>
  <body>
     <header id="entete">
       <div class="container-fluid entete" >
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="rest">
                 <h2> African resturant </h2>
                 <img src="image/etoile.png" width="350"/> 
                 
              </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 img" >   
            <img  src="image/plat.jpeg" width="610" class="pull-left" height="255"alt="foutou"/>
       </div>  
   </div>
</div>  
<?php include('entete.php'); ?>

</header> 
 
 

 <div class="col-md-4 col-sm-3 col-xs-12"></div>
              <div class=" col-md-4 col-sm-7 col  col-xs-12 ">
                 <h1 style="color:red;text-align: center">  </h1>
               <div class="thumbnail" style="height:auto"> 
                
                <form class="form-container1"   method="POST" id="form" action= "" > 
                      
                    <h2 style="font-family: 'Patrick Hand', cursive;text-align:center;color:#DF6D14;text-decoration:none"><b> PASSER MA COMMANDE   </b></h2>
                         <h4 style="text-align:center"> <a href="oublie.php" ></a></p>
                   <b> <h3 style="color:red;text-align:center;border:1px solid black;background:#BBAE98"></h3></b>
                        
                       <div class=" col-lg-12 ">  
                         <div class="form-group"  role="form">
                         <p class="comment"></p>
                        <input type="text" autocomplete="off"role="form" id="email" class=" form-control" placeholder="Nom d'utilisateur" name="email" >
                       <div class="help-block" id="emailMessage"> </div>
                  </div>
                  </div>
                    <div class=" col-lg-12 "> 
                  <div class="form-group">
                    <p class="comment"></p>
                    <input type="text" autocomplete="off" class=" form-control" id="password" placeholder="password" name="password" >
                    <span class="error_form"  id="surname_error"></span>
                     <div class="help-block" id="passwordMessage">  </div>
                  </div>
                    </div>
                       <div class=" col-lg-12 "> 
                   <div class="form-group">
                  <select name="serie" class="form-control">
                    <option value="REPAS"  selected>REPAS</option>
                    <option value=""> FOUTOU+SAUCE</option>
                    <option value="">RIZ</option>
                    <option value="D">ATTIEKE</option>
                     <option value=""> Grillade</option>
                  </select>
              </div>
              </div>

                  <div class="form-group">
                    <button type="submit" id="submit" name="submit" class="btn btn-primary btn-block btn-circle" style="border-radius:30px; background-color: #37BDBF ;height:45px" >
                      <p style="font-size:20px;color:#F26524 ">
                        <b> COMMANDER</b>
                      </p>
                    </button>
                  
                  </div>
                  
                </form>
                 </div>
               </div>
              </div>
            </div>
          </div>
        








   </body>
   </html>