import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
const MsgBar = ({errMsg,color,empty}) => {
    const [state, setState] = React.useState({
        open: true,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;
  return (
    <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          message={errMsg?errMsg:empty}
          key={vertical + horizontal}
          ContentProps={{
            sx: {
              background: `${color}`,
              justifyContent: "center",
            },
          }}
        />
  )
}

export default MsgBar