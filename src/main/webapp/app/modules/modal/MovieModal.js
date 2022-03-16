import { useEffect, useState } from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Grid, Link, makeStyles } from "@material-ui/core";
import { BASE_IMAGE_URL } from '../../config/constants';
import { MovieRestServices } from "../../services/MovieRestServices";

const useStyles = makeStyles(theme => ({
    root: {
        margin: '20px',
        borderRadius: '10px',
        display: 'flex',
        padding: '10px',
        width: '95%',
        height: '90%',
        fontSize: '20px'
    },
    title: {
        flexGrow: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalstyle: {
        width: "90%",
        height: "80%",
        border: "1px solid #282c34",
        borderRadius: 10,
        background: 'black',
        color: "white"
    },
    modalstyle1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space - between',
        height: '100%',
        width: '100%',
    }
}));

const MovieModal = ({ children, movieId }) => {
    const [isOpen, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedMovie, setSelectedMovie] = useState([]);
    const classes = useStyles();

    const fetchMovieDetails = async () => {
        const { data } = await MovieRestServices.movieDetails(movieId);
        setSelectedMovie(data);
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [selectedMovie]);

    return (
        <>
            <Grid>
                <div
                    onClick={handleOpen}
                >
                    {children}
                </div>
                <Modal
                    className={classes.modal}
                    open={isOpen}
                    onClose={handleClose}
                    closeAfterTransition
                >
                        {selectedMovie && (
                            <div className={classes.modalstyle}>
                                <div className={classes.modalstyle1}>
                                    <Grid container alignItems="center" className={classes.root}>
                                    <Grid items xs={4}>
                                            <div>
                                                {selectedMovie.original_title}
                                            </div>
                                        </Grid>
                                        <Grid items xs={4}>
                                            <div>
                                            <StarRateIcon style={{ color: '#FFFF00' }} />{selectedMovie.vote_average}
                                            </div>
                                        </Grid>
                                        <Grid items xs={4}>
                                            <div>
                                                <Link>
                                                <Button style={{ color: 'white', textDecorationLine: 'underline' }} onClick={e => {
                                                    e.preventDefault();
                                                    window.location.href = `https://www.imdb.com/title/${selectedMovie.imdb_id}/reviews/?ref_=tt_ql_urv`
                                                }}
                                                > User Reviews</Button> </Link>
                                            </div>
                                        </Grid>
                                        <Grid items xs={6}> 
                                            <div className={classes.modalstyle1}>
                                                <img src={`${BASE_IMAGE_URL}/${selectedMovie.poster_path}`} alt='fmovie' height="300" width="200"></img>
                                            </div>
                                        </Grid>
                                        <Grid items xs={6}>
                                            <div>
                                                {selectedMovie.overview}
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>      
                        )}
                </Modal>
            </Grid>
        </>
    );
}

export default MovieModal;
