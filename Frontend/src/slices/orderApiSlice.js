import { apiSlice } from "./apiSlice";
import { ORDER_URL } from "../constants";


export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDER_URL,
                method: 'POST',
                body: {...order},
            })
        }),

        getOrderById: builder.query({
            query: (id) => ({
                url: `${ORDER_URL}/${id}`,
            }),
            keepUnusedDataFor: 5,
        })
    })
})

export const {useCreateOrderMutation, useGetOrderByIdQuery} = orderApiSlice;