import { Card, Grid, List, makeStyles } from "@material-ui/core";
import StarRateIcon from '@mui/icons-material/StarRate';
import { BASE_IMAGE_URL } from '../../config/constants';
import { getDateinMonthYrFormat } from '../../shared/util/helper';
import MovieModal from "../modal/MovieModal";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '20px'
    },
    title: {
        flexGrow: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
}));

const SearchResults = props => {
    const { movieId, posterPath, title, releaseDate, ratings } = props;
    const classes = useStyles();

    return (
        <List>
            {/* <Grid container alignItems="center" spacing={2} className={classes.root}> */}
                {/* <Grid items xs={3}> */}
                    <div>
                        <img src={`${BASE_IMAGE_URL}/${posterPath}`} alt='fmovie' height="100" width="100"></img>
                    </div>
                {/* </Grid>
                <Grid items xs={3}> */}
                    <div>
                        {title}
                    </div>
                {/* </Grid>
                <Grid items xs={3}> */}
                    <div>
                        {getDateinMonthYrFormat(releaseDate)}
                    </div>
                {/* </Grid>
                <Grid items xs={3}>
                    <StarRateIcon style={{ color: '#FFFF00' }} />{ratings}
                </Grid>
            </Grid> */}
        </List>
    )
}

export default SearchResults
