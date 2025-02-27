import { Box, Typography } from '@mui/material'
import React from 'react'

function Content() {
  return (
    <Box    flex={4}     sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", px: 2 ,}}>
       
       <Box    sx={{  width: "100%",  display: "flex", flexDirection: "column",    paddingBottom: 2, py: 2  }} >
          <Typography  variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", color: "black" }} >
          The election process for the Telangana Legislative Council (MLC) is in progress
          </Typography>
          <Box    sx={{ height: "50vh",  width: "100%",  border: "1px" , borderStyle: "Sold", borderColor: "black" }} >
            <img src="/assets/MLC.png" style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="Logo" />
          </Box>
        </Box> 


        <Box     sx={{   display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",   paddingBottom: 2,  }}>
           <Box    sx={{ flex: 1, height: "15vh", alignSelf: "flex-start", paddingRight: 2,    }}>
            <img src="/assets/RevanthReddy.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
          </Box>
           <Box sx={{ flex: 2,   alignSelf: "flex-start",   }}> 
            <Typography  sx={{ fontSize: "1rem", color: "black" }} > Hyderabad: Telangana Chief Minister A. Revanth Reddy 
            met Congress leader Rahul Gandhi in Delhi on Saturday and extended an invitation for two public meetings in the state. 
            The events will mark the completion of a detailed caste survey and the categorization of Scheduled Castes.
            </Typography>

           </Box>
        </Box>
        <Box     sx={{   display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",   paddingBottom: 2,  }}>
           <Box    sx={{ flex: 1, height: "15vh", alignSelf: "flex-start", paddingRight: 2,    }}>
            <img src="/assets/SridharBabu.jpeg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
          </Box>
           <Box sx={{ flex: 2,   alignSelf: "flex-start",   }}> 
            <Typography  sx={{ fontSize: "1rem", color: "black" }} > Hyderabad: Telangana IT and Industries Minister Duddilla Sridhar Babu emphasized on Friday 
            said that the state has played a crucial role in India's economic growth and urged the Union government to fulfill its commitments made during bifurcation.
             He called for greater budgetary support, highlighting the need for increased allocations in key sectors such as
              education, IT, industries, healthcare, and panchayat raj.
            </Typography>

           </Box>
        </Box>

        <Box     sx={{   display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",   paddingBottom: 2,  }}>
           <Box    sx={{ flex: 1, height: "15vh", alignSelf: "flex-start", paddingRight: 2,    }}>
            <img src="/assets/TGDam.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
          </Box>
           <Box sx={{ flex: 2,   alignSelf: "flex-start",   }}> 
            <Typography  sx={{ fontSize: "1rem", color: "black" }} >  
            Hyderabad: Rabi (Yasangi) farmers in Telangana are facing growing distress as they reach the midpoint of the crop season. 
           While a significant portion of the crops still requires irrigation for another 2 months, some areas need water for an additional 15 days.
            However, uncertainty looms over their survival. With a severe shortage of irrigation water, many farmers are struggling to sustain their 
            crops.
            </Typography>

           </Box>
        </Box>
        

        
    </Box>
  )
}

export default Content