import React from 'react'
import { Grid,Card,CardActionArea,CardMedia,CardContent } from '@mui/material';
import { contestImg } from "../assests/images";
import { IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { getContestDetail } from '../services/adminServices';
import { useNavigate } from 'react-router-dom';
const card = {
    width: "220px",
    maxHeight: "211px",
    borderRadius: "11px",
  };
  const cardImg = {
    padding: "10px",
  };
  const delBtn1 = {
    position: "absolute",
    top: "-0.5%",
    right: "-2%",
    color: "black",
  };
  const cardBody = {
    height: "120vh",
    background: `linear-gradient(
      180deg,
      rgba(24, 135, 201, 0) 0%,
      rgba(24, 135, 201, 0.224167) 40.42%,
      rgba(24, 135, 201, 0.4) 100%
    )`,
    overflow: "auto",
    backgroundColor: "#F8F7F7",
  };
  const contestText = {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#3D3D3D",
  };
  const months = {
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "14px",
  };
const DashCard = ({name,level,description,contestDetails,setConfirm,setDelContest,setContestData}) => {
    const navigate=useNavigate();
    const deleteContest = () => {
        setDelContest({
          name: name,
          id: contestDetails?.index,
          contestId: contestDetails?.id,
        });
        setConfirm(true);
      };
      const handleContest = async () => {
        try {
          const result = await getContestDetail(contestDetails?.id);
          setContestData(result?.data);
          navigate("/addQuestion", { state: { result } });
        } catch (error) {
          console.log("error", error);
        }
      };
  return (
    <Grid item md={3} mt={5} key={'index'}>
    <Card sx={card}>
      <CardActionArea>
        <CardMedia
          onClick={() =>
            handleContest()
          }
          style={cardImg}
          component="img"
          height="140"
          image={contestImg}
          alt="green iguana"
        />
        <IconButton
          color="primary"
          aria-label="add"
          sx={delBtn1}
          onClick={() =>
            deleteContest()
          }
        >
          <CancelIcon />
        </IconButton>
        <CardContent sx={cardBody}>
          <h6 style={contestText}>
            {name}&nbsp;~&nbsp;
            {level}
          </h6>
          <p style={months}>
            {description}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  )
}

export default DashCard