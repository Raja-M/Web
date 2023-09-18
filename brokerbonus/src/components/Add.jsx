import React, { useState } from 'react'
import { Fab, Tooltip, Box, Modal, Typography, Avatar, Stack, ButtonGroup, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';
import { useTheme } from '@emotion/react';




const SModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBotton: '20px'

});

export const Add = () => {

  const darkTheme = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <><Tooltip onClick={(e) => { setOpen(true) }}
      title="Add"
      sx={{ position: 'fixed', bottom: 20, left: { xs: '40%', md: 30 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>

      <SModal
        open={open}
        onClose={(e) => { setOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400}
          height={280}
          bgcolor = { darkTheme.palette.background.default } color={ darkTheme.palette.text.primary}
          padding={3}
          borderRadius={5}  >
          <Typography variant='h6' color='gray' textAlign='center' > Create post </Typography>
          <UserBox>
            <Avatar src="https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80">
              sx={{ width: 30, height: 30 }}
            </Avatar>
            <Typography fontWeight={500}>John Doe</Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={3}
            defaultValue="What's on your mind?"
            variant="standard"
          />
          <Stack direction='row' gap={1} mt={2} marginBottom={3}>
            <EmojiEmotions></EmojiEmotions>
            <Image></Image>
            <VideoCameraBack></VideoCameraBack>
            <PersonAdd></PersonAdd>

            <Box></Box>
          </Stack>
          <ButtonGroup
                fullWidth
                variant="contained" 
                aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><DateRange></DateRange></Button>
           
          </ButtonGroup>

        </Box>
      </SModal>
    </>
  )
}
{
  /*
                <UserBox>
            <Avatar 
                src='#'
                sx={{ width: 30, height: 30 }}
            </Avatar>
            <Typography fontWeight={500} variant='span'>
              John Doe
            </Typography>
          </UserBox>

  */
}