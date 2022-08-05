import React from 'react'
import { Button,Container, Box, Grid, Icon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const containerStyle = {
    height: "550px",
    background: "linear-gradient(90.17deg, #00a0ff 0.13%, #003aab 99.84%)",
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
  };
  const createContext = {
    background: "#fdfeff",
    borderRadius: "18px 18px 0px 0px",
    padding: "30px",
    position: "sticky",
  };
  const app = {
    height: "100%",
    background: `linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
    overflow: "auto",
  };
  
  const card = {
    maxWidth: 220,
    maxHeight: 220,
    borderRadius: "11px",
  };
  const array=[1,2,3,4,6,]
const Dashbord = () => {
  return (
    <div style={app}>
        <Container sx={createContext}>
        <h2>Create contest</h2>
      </Container>
      <Container sx={containerStyle}>
        <Grid container marginTop={5}>
          {array.map((val) => {
            return (
              <Grid item md={3}>
                <Card sx={card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://www.thoughtco.com/thmb/Sc9zsxKbJvtExv15AnAuB4Cp2PM=/2121x1414/filters:fill(auto,1)/GettyImages-622013488-55a1fad50d93429fb927087e1f18cff8.jpg"
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
            );
          })}
          <Card sx={card}>
            <CardActionArea>
             <CardMedia>
            <Button contained>+</Button>
             </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <Icon fontSize="small">add_circle</Icon>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
    </div>
  )
}

export default Dashbord