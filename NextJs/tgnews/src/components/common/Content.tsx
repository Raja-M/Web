import { Box, Typography } from '@mui/material'
import React from 'react'

function Content() {
  return (
    <Box    flex={4}     sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", px: 2 ,}}>
       
       <Box    sx={{  width: "100%",  display: "flex", flexDirection: "column",    paddingBottom: 2, py: 2  }} >
          <Typography  variant="h1" sx={{ fontSize: "2rem", fontWeight: "bold", color: "black" }} >
          Gram Panchayat Elections-2025 is in progress
          </Typography>
          <Box    sx={{ height: "50vh",  width: "100%",  border: "1px" , borderStyle: "Sold", borderColor: "black" }} >
            <img src="/assets/Election.jpg" style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="Logo" />
          </Box>
        </Box> 


        <Box     sx={{   display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",   paddingBottom: 2,  }}>
           <Box    sx={{ flex: 1, height: "15vh", alignSelf: "flex-start", paddingRight: 2,    }}>
            <img src="/assets/RevanthReddy.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
          </Box>
           <Box sx={{ flex: 2,   alignSelf: "flex-start",   }}> 
            <Typography  sx={{ fontSize: "1rem", color: "black" }} > The State Election Commission (SEC) of Telangana has officially initiated the first phase of the Gram Panchayat Elections-2025. 
              The election notice was issued on Thursday, November 27, 2025, by the Returning Officer, setting the electoral process in motion for thousands of local government positions.
            </Typography>
           </Box>
        </Box>
        <Box     sx={{   display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",   paddingBottom: 2,  }}>
           <Box    sx={{ flex: 1, height: "15vh", alignSelf: "flex-start", paddingRight: 2,    }}>
            <img src="/assets/SridharBabu.jpeg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
          </Box>
           <Box sx={{ flex: 2,   alignSelf: "flex-start",   }}> 
            <Typography  sx={{ fontSize: "1rem", color: "black" }} > Key Details at a Glance Aspect	Details
Election Body	                    : Telangana State Election Commission (SEC)
Phase	First Phase Date of Notice	: Thursday, November 27, 2025
Posts to be Filled	              : 4,236 Sarpanch & 37,440 Ward Member
Key Voter Action                  :	Voter list will be displayed at Gram Panchayat offices.
            </Typography>

           </Box>
        </Box>

        <Box     sx={{   display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start",   paddingBottom: 2,  }}>
           <Box    sx={{ flex: 1, height: "15vh", alignSelf: "flex-start", paddingRight: 2,    }}>
            <img src="/assets/TGDam.jpg" style={{ height: "100%", width: "100%", objectFit: "fill" }} alt="Logo" />
          </Box>
           <Box sx={{ flex: 2,   alignSelf: "flex-start",   }}> 
            <Typography  sx={{ fontSize: "1rem", color: "black" }} >  
            Official Start: The issuance of the election notice is the formal beginning of the election process for this phase. It triggers a series of events like filing nominations, scrutiny, and polling.

Scale of Elections: The first phase alone is massive, covering over 4,000 villages (each with one Sarpanch) and nearly 37,500 ward-level constituencies.

Voter Verification: The display of the voters list at Gram Panchayat offices is a critical step. It allows voters to check their names, ensure details are correct, and raise objections or make corrections if necessary before the polls.
            </Typography>

           </Box>
        </Box>
        
        Filing of Nominations: Candidates will submit their nomination papers to the Returning Officer.

Scrutiny of Nominations: The submitted papers will be verified for validity.

Withdrawal of Candidatures: Candidates can choose to withdraw their nominations.

Final List of Candidates: A final list of contesting candidates will be published.

Polling Date: The actual date for voting will be announced.v
        
    </Box>
  )
}

export default Content