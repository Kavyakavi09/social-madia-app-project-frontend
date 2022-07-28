import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
    mainHeading: {
      fontSize: '2rem',
    },
    image: {
      height: '40px',
    },
  },
  appBar: {
    borderRadius: 15,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
