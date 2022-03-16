import {
    Grid, makeStyles, TextField, Toolbar
} from '@material-ui/core';
import { Alert, AlertTitle, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import React, { StrictMode, useEffect, useState, memo } from 'react';
import { MovieRestServices } from '../../services/MovieRestServices';
import { getDateinMonthYrFormat } from '../../shared/util/helper';
import CommonSearch from './CommonSearch';
import NO_POSTER from '../../assets/NO-POSTER.jpg'
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '20px'
    },
    title: {
        flexGrow: 1,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    textField: {
        width: '470px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    headerField: {
        width: '470px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'left',
        textTransform: 'uppercase',
        backgroundColor: '#ffa500',
        fontFamily: 'Montserrat", sans-serif',
        fontSize: '5vw',
        paddingBottom: '15px',
        zIndex: '100',
        boxShadow: '0px 1px 5px black',
        margin: '20px'
    }
}));

const FeaturedMovies = () => {

    const classes = useStyles();

    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [featureFlag, setFeatureFlag] = useState(true);
    const [searchFlag, setSearchFlag] = useState(false);
    const [text, setText] = useState('');
    const [alertFlag, setAlertFlag] = useState(false);
    const [matchResult, setMatchResult] = useState([]);
    const fetchFeaturedMovies = async () => {
        const { data } = await MovieRestServices.getFeaturedMovies();
        if (data.results.length > 0) {
            setFeaturedMovies(data.results);
        }
    };

    const handleChange = async query => {

        setText(query);
        if (query !== undefined) {
            if (query.length > 0) {
                
                const { data: result } = await MovieRestServices.searchMovies(query);
                const matches = result.results;
                if (matches.length > 0) {
                    setFeatureFlag(false);
                    setAlertFlag(false);
                    setMatchResult(matches);
                    setSearchFlag(true);
                } else {
                    setAlertFlag(true);
                    setFeatureFlag(false);
                    setSearchFlag(false);
                }
            } else {
                setFeatureFlag(true);
                setSearchFlag(false);
                setAlertFlag(false);
            }
        }
    };

    useEffect(() => {
        handleChange();
        fetchFeaturedMovies();
    }, [text, matchResult]);

    return (
        <StrictMode>
            <Container>
                <Grid container alignItems="center" spacing={2} className={classes.root}>
                    <div data-testid='searchid'>
                        <Grid items xs={12} className={classes.headerField}>
                            <Toolbar >
                                <Typography id="pageTitle" variant="h6" >
                                    IMDB Feature Movies
                                </Typography>
                            </Toolbar>
                        </Grid>
                        <Grid items xs={12} spacing={2} className={classes.root}>
                            <div style={{ display: "flex", width: '500', height: '200' }} data-testid='searchid'>
                                <TextField type='text'
                                    label='Search Movies...'
                                    data-testid='searchid'
                                    onChange={e => handleChange(e.target.value ? e.target.value : '')}
                                    value={text}
                                    variant='outlined'
                                    InputProps={{
                                        className: classes.textField,
                                    }}
                                />
                                {/* <Autocomplete
                                        id="combo-box-demo"
                                        options={matchResult.map(option => option)}
                                        inputProps={{ 'width': '500px' }}
                                        onChange={e => handleChange(e.target.value)}
                                        renderInput={(params) => <TextField {...params} label="Search Movie"
                                            onChange={e => handleChange(e.target.value)} variant='outlined' />}
                                        popupIcon={<SearchIcon onClick={e => handleChange(e.target.value)} />}
                                        // onClick={handleChange()}
                                        getOptionLabel={(option) =>
                                            <Grid container alignItems="center" spacing={2} className={classes.root}>
                                            <Grid items xs={3}>
                                                <div>
                                                    <img src={`${BASE_IMAGE_URL}/${option.poster_path}`} alt='fmovie' height="50" width="50"></img>
                                                </div>
                                            </Grid>
                                            <Grid items xs={3}>
                                                <div>
                                                    {option.title}
                                                </div>
                                            </Grid>
                                            <Grid items xs={3}>
                                                <div>
                                                    {getDateinMonthYrFormat(option.release_date)}
                                                </div>
                                            </Grid>
                                            <Grid items xs={3}>
                                                <StarRateIcon style={{ color: '#FFFF00' }} />{option.vote_average}
                                            </Grid>
                                        </Grid>
                                        }
                                        style={{ width: 300 }}
                                    /> */}
                                {/* </Paper> */}
                            </div>
                        </Grid>
                        {featureFlag && featuredMovies && featuredMovies.slice(0, 10).map(movie => (
                            <CommonSearch
                                movieId={movie.id}
                                posterPath={movie.poster_path}
                                title={movie.original_title}
                                releaseDate={getDateinMonthYrFormat(movie.release_date)}
                                ratings={movie.vote_average} />
                        ))}
                        {searchFlag && matchResult && matchResult.slice(0, 10).map(movie => (
                            <CommonSearch
                                movieId={movie.id}
                                posterPath={movie.poster_path}
                                title={movie.original_title}
                                releaseDate={getDateinMonthYrFormat(movie.release_date)}
                                ratings={movie.vote_average} />
                        ))}
                        {alertFlag && <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            <strong>No Movies Found</strong>
                        </Alert>}
                    </div>
                </Grid>
            </Container>
        </StrictMode>
    )
}

export default memo(FeaturedMovies);
