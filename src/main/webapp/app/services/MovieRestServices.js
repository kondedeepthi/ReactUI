
import axios from 'axios';

const MOVIE_API_BASE_URL = "http://localhost:8080";

export class MovieRestServices {

    static getFeaturedMoviesURL() {
        return MOVIE_API_BASE_URL;
    }

    static async getFeaturedMovies() {
        try {
            const URL = this.getFeaturedMoviesURL() + '/discover';
            return await axios.get(URL, {
                headers: { 'Content-Type': 'application/json' },
                params: {
                    language: 'en-US',
                    sort_by: 'popularity.desc',
                    include_adult: false,
                    include_video: false,
                    page: 1
                }
            });
        } catch (err) {
            throw err;
        }
    }

    static async searchMovies(text) {
        try {
            const URL = this.getFeaturedMoviesURL() + '/search';
            return await axios.get(URL, {
                headers: { 'Content-Type': 'application/json' },
                params: {
                    language: 'en-US',
                    query: text,
                    include_adult: false
                }
            }
            );
        } catch (err) {
            throw err;
        }
    }

    static async movieDetails(req) {
        try {
            const URL = this.getFeaturedMoviesURL() + `/details/${req}`;
            return await axios.get(URL, {
                headers: { 'Content-Type': 'application/json' },
                params: {
                    language: 'en-US'
                }
            },
                { timeout: 100 });
        } catch (err) {
            throw err;
        }
    }
}