import { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from '@material-ui/core';
import Image from 'next/image';

import MailIcon from '../public/images/mail.svg';
import SafariIcon from '../public/images/safari.svg';
import MessageIcon from '../public/images/message.svg';
import PhotoIcon from '../public/images/photo.svg';
import CheckCircleIcon from '../public/images/CheckCircle.svg';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    paddingBottom: theme.spacing(3)
  },
  wrapper: {
    display: 'grid',
    gridTemplateRows: '1fr 42px',
    alignItems: 'center',
    gridGap: theme.spacing(2),
    width: '100%',
    height: '100%'
  },
  content: {
    textAlign: 'center'
  },
  image: {
    display: 'block',

    '+ &': {
      display: 'block',
      width: '100%'
    }
  }
}));

const SLIDES: { title: string; icon: any }[] = [
  {
    title: 'Scanning your device for malware',
    icon: MailIcon
  },
  {
    title: 'Scanning your device for malware',
    icon: SafariIcon
  },
  {
    title: 'Checking Device ID',
    icon: MessageIcon
  },
  {
    title: 'Checking Device ID',
    icon: PhotoIcon
  },
  {
    title: 'Completed',
    icon: CheckCircleIcon
  }
];

const PROGRESS_END = 100;
const PROGRESS_INTERVAL = 20;

export default function Home() {
  const classes = useStyles();
  const [progress, setProgress] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => p + PROGRESS_INTERVAL);
    }, 2000);

    if (progress === PROGRESS_END) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  const currentSlideIndex = progress / PROGRESS_INTERVAL - 1;
  const content = SLIDES[currentSlideIndex];

  return (
    <Container className={classes.container}>
      <div className={classes.wrapper}>
        <Grid container spacing={2} className={classes.content}>
          <Grid item xs={12}>
            <Image src={content.icon} alt={content.title} />
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" value={progress} />
          </Grid>
          <Grid item xs={12}>
            <Typography>{content.title}</Typography>
          </Grid>
        </Grid>
        <div>
          {currentSlideIndex === SLIDES.length - 1 && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              href="/repair"
            >
              Repair this device
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
