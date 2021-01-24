const SEARCH_NAME_ALBUM = 'SEARCH_NAME_ALBUM';
const GET_FILTERS = 'GET_FILTERS';
const GET_LOCALE = 'GET_LOCALE';
const GET_COUNTRY = 'GET_COUNTRY';
const GET_LIMIT = 'GET_LIMIT';
const GET_ALBUM = 'GET_ALBUM';


const INITIAL_STATE = {
    search:'',
    filters:null,
    locale:'pt_BR',
    country:'BR',
    albumLimit:4,
}


export default function ( state = INITIAL_STATE, { type,payload } ){
    switch (type) {
        case SEARCH_NAME_ALBUM:
            return { ...state, search: payload }
        case GET_FILTERS:
            return { ...state, filters: payload }
        case GET_LOCALE:
            return { ...state, locale:payload }
        case GET_COUNTRY:
            return{ ...state, country:payload }
        case GET_LIMIT:
            return { ...state, albumLimit:payload }
        case GET_ALBUM:
            return { ...state, album:payload }
        default:
            return state;
    }
}

export const searchName = (payload) => ({
    type: SEARCH_NAME_ALBUM,
    payload: payload
})

export const getFilters = (filtes) => ({
    type:GET_FILTERS,
    payload:filtes
})

export const getCountry = (country) => ({
    type:GET_COUNTRY,
    payload:country
})

export const getLocale = (locale) => ({
    type:GET_LOCALE,
    payload:locale
});

export const getLimitAlbum = (limit) => ({
    type:GET_LIMIT,
    payload:limit
})

export const getAlbums = (album) => ({
    type:GET_ALBUM,
    payload:album
})