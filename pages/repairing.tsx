import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import Image from 'next/image';

import BugIcon from '../public/images/bug.svg';
import ReparedIcon from '../public/images/repared.svg';
import CheckIcon from '../public/images/Check.svg';
import ArrowClockwise from '../public/images/ArrowClockwise.svg';

// const createListItem = ({
//   icon: Icon,
//   text,
// }: {
//   icon: React.FC;
//   text: string;
// }) => (
//   <ListItem>
//     <ListItemAvatar>
//       <Icon />
//     </ListItemAvatar>
//     <ListItemText
//       primary={text}
//       primaryTypographyProps={{ color: "textSecondary", variant: "body2" }}
//     />
//   </ListItem>
// );

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
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

const STEPS = [
  'Recovering your battery',
  'Recovering your contacts',
  'Recovering your photos',
  'Recovering your SIM-card'
];

// const createListItem = ({ text }: { text: string }) => (
//   <ListItem>
//     <ListItemAvatar>
//       <Icon />
//     </ListItemAvatar>
//     <ListItemText
//       primary={text}
//       primaryTypographyProps={{ color: "textSecondary", variant: "body2" }}
//     />
//   </ListItem>
// );

const PROGRESS_END = 100;

export default function Repairing() {
  const classes = useStyles();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    if (progress === PROGRESS_END) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Image src={progress !== 100 ? BugIcon : ReparedIcon} />
        </Grid>

        <Grid item xs={12}>
          <LinearProgress variant="determinate" value={progress} />
        </Grid>

        <Grid item xs={12}>
          <Typography style={{ fontWeight: 'bold' }} align="center">
            {progress !== PROGRESS_END ? 'Removing Malware...' : 'Completed'}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Image src={progress < 24 ? ArrowClockwise : CheckIcon} />
                </ListItemAvatar>
                <ListItemText primary="Recovering your battery" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Image src={progress < 46 ? ArrowClockwise : CheckIcon} />
                </ListItemAvatar>
                <ListItemText primary="Recovering your contacts" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Image src={progress < 86 ? ArrowClockwise : CheckIcon} />
                </ListItemAvatar>
                <ListItemText primary="Recovering your photos" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Image src={progress === 100 ? CheckIcon : ArrowClockwise} />
                </ListItemAvatar>
                <ListItemText primary="Recovering your SIM-card" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
