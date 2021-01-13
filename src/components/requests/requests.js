
const API_KEY = "4c9c4f178058b28cf54dc29f9a705f10";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=language=en-US`,
    fetchNetflixOriginal:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,



} 
export default requests;