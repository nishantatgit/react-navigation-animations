const BASE_URL = 'https://ergast.com/api/f1';

 
const END_POINTS = {
        BASE_URL,
        SEASONS: `${BASE_URL}/seasons.json?limit=75`
}

const SEASON_DETAILS_HEADERS = {
    Circuit : { 
        Location: 'Location', 
        circuitId: 'Circuit ID', 
        circuitName: 'Circuit Name' 
        }, 
    date : 'Date', 
    raceName: 'Race Name', 
    round: 'Round', 
    season: 'Season',
    result: 'View Result'
}

const HEADERS = {
    HOME_PAGE: 'Formula One Racing Seasons',
}

export { END_POINTS, SEASON_DETAILS_HEADERS, HEADERS }
