
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FeaturedMovies from '../../../../../main/webapp/app/modules/featuredMovies/FeaturedMovies';
jest.mock('axios');

const MockFeaturedMovies = () => {
    return (
        <BrowserRouter>
            <FeaturedMovies />
        </BrowserRouter>
    )
}


describe('Test Movie component', () => {


    beforeEach(() => {
        // console.log("RUNS BEFORE EACH TEST")
        jest.mock("../../../../../__mocks__/axios")
    })


    it('should render title', () => {

        render(<FeaturedMovies />);

        const title = screen.getByText('IMDB Feature Movies');
        expect(title).toBeInTheDocument();
    });

    it('should render search', async () => {

        const url = 'https://api.themoviedb.org/3/discover/movie?api_key=8ae14cd120d6b7591f30991c5afc0b55&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

        render(<MockFeaturedMovies url={url}/>);

        const search = screen.getByLabelText('Search Movies...');
        fireEvent.change(search, {target: { value: 'Spider'}});
        
        axios.get.mockResolvedValueOnce({
            data : {
                "page": 1,
                "results": [
                    {
                        "adult": false,
                        "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
                        "genre_ids": [
                            28,
                            12,
                            878
                        ],
                        "id": 634649,
                        "original_language": "en",
                        "original_title": "Spider-Man: No Way Home",
                        "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
                        "popularity": 10552.154,
                        "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
                        "release_date": "2021-12-15",
                        "title": "Spider-Man: No Way Home",
                        "video": false,
                        "vote_average": 8.3,
                        "vote_count": 9461
                    },
                    {
                        "adult": false,
                        "backdrop_path": "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
                        "genre_ids": [
                            80,
                            9648,
                            53
                        ],
                        "id": 414906,
                        "original_language": "en",
                        "original_title": "The Batman",
                        "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
                        "popularity": 3956.45,
                        "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
                        "release_date": "2022-03-01",
                        "title": "The Batman",
                        "video": false,
                        "vote_average": 8,
                        "vote_count": 1712
                    }
                ],
                "total_pages": 32697,
                "total_results": 653931
            }
        });
        
    })
})