import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import useBackendData from '../../../hooks/useBackendData';
import { Box, Button, Typography } from '@mui/material';
import BadgeDetailImage from '../../../components/BadgeDetailImage';

const OrgBadgeDetail = () => {
  const {id}=useParams()  
  console.log(id)
  const [apiLoad,apiError,apiData]=useBackendData(`org/badge/${id}/detail`,{})

  if(apiError) return <Error message={apiError}/>

  if(apiLoad) return <Loading/>

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          "&>div": {
            mt: 3,
          },
        }}
        className="sm-wrap"
      >
        <Box
          sx={{
            minWidth: 450,
          }}
        >
          <Typography variant="h5">{apiData.title}</Typography>
          <Typography variant="body1">{apiData.desc}</Typography>
        </Box>
        <BadgeDetailImage src="https://tiny.nikjos.in/hello" />
      </Box>

      <Box
        sx={{
          mt: 2,
          "& a": {
            mt: 3,
          },
        }}
      >
        <Button
          component={Link}
          variant="contained"
          sx={{ mr: 5 }}
          to="../award"
        >
          Award Badges
        </Button>
        <Button component={Link} variant="outlined" to="../assertions">
          View History
        </Button>
      </Box>
    </div>
  );
}

export default OrgBadgeDetail