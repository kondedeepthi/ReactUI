
a movie theater is looking to build a way of advertising what movies are showing or upcoming so they can attract more audience.

To do this, they wanted to build a web application where the customers can search and discover the different movies at the theater.

You are responsible of building such app, and they rely on your experience to create the best app for their audience, however for the first version of the app, they limited the features to be developed.

For this challenge and in order to simplify the task, we will use the Open Movies DB (https://developers.themoviedb.org/3/getting-started/introduction)

## Features

- ### Discover / Featured Movies

When a customer opens the web application, he is presented with an interface to see different featured or recommended movies

**Functionality**:

1. List the first 10 movies, by popularity.
2. Display a poster image, title, date of release (Year and Month e.g July 2021) and Rating.

**API**: https://developers.themoviedb.org/3/discover/movie-discover

- ### Search Feature

Allow the users to search a movie by name or description

**Functionality**:

1. The search should look in name and description.
2. Nice to have: Autocomplete.

**API**: https://developers.themoviedb.org/3/search/search-movies

- ### Movie Details

When a user selects a movie (from search results or discover page), he gets to see the full details of that movie, including: detailled description, total reviews, average rating, gender and list of reviews.

**Functionality**:

1. Nice to have: include a preview / trailer of the movie in the details.

**API**: https://developers.themoviedb.org/3/movies/get-movie-details

## Technical Requirements

- User Interface to be suggested by the candidate, however candidates will not be judged on the look and feel of the app, as long as it's usable.
- DO NOT CALL the Movies API directly from Frontend.
- Nice to have: deployed (Heroku, Netlify,....).

### Tech Stack

The following technologies / framework to be used for this challenge:

 - **Backend**: Java Springboot OR NestJS https://docs.nestjs.com/.
 - **Frontend**: ReactJS with your choice of any UI library (AntDesign, Material UI, Tailwind..)
 - **GraphQL**: Nice to have, but not mandatory, a REST API will be enough.

### Deliverables

- Github repo for the frontend and backend (one or two repos, your choice)
- README file describing briefly your tehc strategy ( few lines only, not an essay)

