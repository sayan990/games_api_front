import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const gamesApi = createApi({
    reducerPath:"gamesAPI",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3001/api/"
    }),
    endpoints: (builder) =>({
        getGames: builder.query({
            query: () => "videogames"
        }),
        getGamesById: builder.query({
            query: ({id}) => `videogames/${id}`
        })
    })
})

export const {useGetGamesQuery, useGetGamesByIdQuery} = gamesApi