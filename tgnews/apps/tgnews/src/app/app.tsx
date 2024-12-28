// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { Box, Paper } from "@mui/material"

export function App() {
  return (
    <div>
      <html lang="en">
        <head>
        
     

        </head>
        <body >
          <Paper elevation={10} >
            <Box 
            display="flex"
            sx={{height:100, justifyContent:'center' , alignItems:"center"}} > 
            <div >
              <div  className="dmSerif"> TGNews</div>
            </div>               
   
   
            </Box>
            <Box 
            display="flex"
            sx={{height:50, justifyContent:'center' , alignItems:"center"}} > 
               <p> Menu </p>

              <Box
              sx={{ border:1,  width: 200,  justifyContent:'center' , alignItems:"center"}}>
              <div >
                <div  className="playfairDisplay"> 
                  <div>TGNews</div>
                  
                </div>
              </div> 
              </Box>              

              <Box
              sx={{ border:1,  width: 200,  justifyContent:'center' , alignItems:"center"}}>
              <div  >
                <div  className="playfairDisplay"> 
                  <div>TGNews</div>
                  
                </div>
              </div> 
              </Box> 
   
            </Box>
            <Box
              display="flex"
              sx={{   justifyContent:'center' , alignItems:"center"}}
            >
             <Box 
              
            
              sx={{ border:1, height:10000, width: 200,  justifyContent:'center' , alignItems:"center"}} > 
                

                   

              </Box>
              <Box 
              
            
              sx={{ border:1, height:10000, width: 800,  justifyContent:'center' , alignItems:"center"}} > 
                

                  <div > 
              
                  </div> 

              </Box>

              <Box 
              
            
              sx={{ border:1, height:10000, width: 200,  justifyContent:'center' , alignItems:"center"}} > 
                

                   

              </Box>
              
            </Box>
          </Paper >
        </body>
      
      </html>
    </div>
  );
}

export default App;
