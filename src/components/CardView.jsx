import React from 'react'
import { Home } from '@mui/icons-material';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
const CardView = ({ handleDragStart, l, color }) => {
    return (
        <>
            <div className='card' style={{ border:`2px solid ${color}`, marginBottom:'1rem',borderRadius:'6px' }} draggable onDragStart={e => handleDragStart(e, l)}>
                <Card >
                    <CardActionArea>
                        <Grid container alignItems={'center'} spacing={5}>
                            <Grid item xs={2}>
                                <CardMedia
                                    sx={{ width: '60px', borderRadius: '100px' }}
                                    component="img"
                                    height="60px"
                                    image={l.photo}
                                    alt="green iguana"
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <CardContent>
                                    <Grid container>
                                        <Grid item xs={12} >
                                            <Typography color='primary' variant='subtitle1'>{l.name}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box>
                                                <Typography>
                                                    {l.location}</Typography>
                                            </Box>
                                        </Grid>

                                        <Grid item>
                                            <Typography color='GrayText' >{l.date_applied}</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

export default CardView