import { apiSlice } from "./apiSlice";
import { ORDER_URL, PAYPAL_URL } from "../constants";


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
        }),

        getLoggedInUserOrders: builder.query({
            query: () => ({
                url: `${ORDER_URL}/mine`,
            }),
            keepUnusedDataFor: 5,
        }),

        payOrder: builder.mutation({
            query: (orderId, details) => ({
                url: `${ORDER_URL}/${orderId}/pay`,
                method: 'PUT',
                body: {...details},
            })
        }),

        getPayPalClientId: builder.query({
            query: () => ({
                url: PAYPAL_URL,
            }),
            keepUnusedDataFor: 5,
        })
    })
})

export const {useCreateOrderMutation, useGetOrderByIdQuery, useGetLoggedInUserOrdersQuery, usePayOrderMutation, useGetPayPalClientIdQuery} = orderApiSlice;