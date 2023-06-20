const REQUEST_TYPE = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH'
};
const API_URL="http://localhost:8081/";
const CONTENT_TYPE = {
    JSON: 'application/json; charset=utf-8'
};

const CONFIG = {
    REDIRECT_HOME_URL: process.env.API_URL,
    API:{
        GETPLACES:{
            PATH:API_URL+'getPlaces',
            HEADER: {
                method: REQUEST_TYPE.GET,
                // contentType: CONTENT_TYPE.JSON
            }
        },
        GETBUSES:{
            PATH:API_URL+'getBuses',
            HEADER:{
                method:REQUEST_TYPE.GET,
            }
        },
        GETSEATS:{
            PATH:API_URL+'getSeats',
            HEADER:{
                method:REQUEST_TYPE.GET
            }
        }
    }
}
export default CONFIG;