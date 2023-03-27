import { Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Sidebar from "./Sidebar";
import Rightbar from "./Rightbar";

function Content() {
  return (
    <div className="test">
      <Grid container direction={"row"}>
        <Grid xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={6}>
          <Box>
            <Typography variant="h6">Welcome to My Website</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              incidunt obcaecati accusamus pariatur facere, quisquam, numquam
              tenetur repellat dolor fugiat vel expedita asperiores nesciunt
              ipsa quia, neque molestias? Doloremque, cum?
            </Typography>

            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              incidunt obcaecati accusamus pariatur facere, quisquam, numquam
              tenetur repellat dolor fugiat vel expedita asperiores nesciunt
              ipsa quia, neque molestias? Doloremque, cum?
            </Typography>
          </Box>

          <Grid>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/coconut.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/coconut.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item xs={8}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="../assets/coconut.jpeg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4}>
            <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
