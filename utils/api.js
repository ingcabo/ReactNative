const BASE_API = "https://yts.am/api/v2";

class Api{
    /*investigar por que estatica */
    async getSuggestion(id) {
        try{

            const query = await fetch(
                `${BASE_API}/movie_suggestions.json?movie_id=${id}`
            );
            const  {data}  = await query.json();
            //console.log(data.movies)
            return data.movies

        } catch (e){
            console.log('fallo en api getSuggestion');
        }

    }

    async getMovies(){
        try{
            const query = await fetch(
                `${BASE_API}/list_movies.json`
            );
            const {data} = await query.json();
            return data.movies
        }catch(e){
        console.log('fallo en api getMovies')
        }
    }

}
/*
Una buena practica es crear el método getSuggestions de la clase API como estático. Dejo ejemplo:
*/
export default new Api();