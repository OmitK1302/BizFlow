import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetOrderByIdQuery } from '../slices/orderApiSlice';
import OrderComponent from '../components/OrderComponent';

import { usePayOrderMutation, useGetPayPalClientIdQuery } from '../slices/orderApiSlice';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';

// import 


const OrderDetailScreen = () => {
    const id = useParams().id;
    // console.log(id);

    const {data: order, refetch, isLoading, error} = useGetOrderByIdQuery(id);
    // if(order) console.log(order.user.name);
    // console.log(order);

    const [payOrder, {isLoading: loadingPay}] = usePayOrderMutation();
    
    const {data: paypal, isLoading: LoadingPayPal, error: errorPayPal} = useGetPayPalClientIdQuery();
    
    const  [{isPending}, paypalDispatch] = usePayPalScriptReducer();
    
    const {userInfo} = useSelector((state) => state.auth);

    useEffect(() => {
        if(!errorPayPal && !LoadingPayPal && paypal.clientId) {
            paypalDispatch({
                type: "resetOptions",
                value: {
                    "client-id": paypal.clientId,
                    currency: "INR",
                },
            });
            paypalDispatch({
                type: "setLoadingStatus",
                value: "pending",
            });
        }

        if(order && !order.isPaid) {
            if(!window.paypal) {
                loadPayPalScript();
            }
        }

    }, [order, paypal, paypalDispatch, LoadingPayPal, errorPayPal]);
    
    return (
        <>
            <div className='px-4  w-full'>
                {isLoading ? (
                    <div className='sm:px-16 px-8 sm:py-24 py-12'>
                        <h1 className='text-2xl font-bold'>Loading...</h1>
                    </div>
                ) : error ? (
                    <div className='sm:px-16 px-8 sm:py-24 py-12'>
                        <h1 className='text-2xl font-bold'>Error: {error}</h1>
                    </div>
                ) : (
                    <div className='padding'>
                        <h1 className='pt-24 px-4 pb-4 text-4xl font-semibold'>Order Summary</h1>
                        <h2 className='px-4 pb-4 text-2xl font-semibold'>Order Id: {order._id}</h2>
                        <div className='sm:px-8 flex xl:flex-row flex-col gap-4 w-full'>
                            <div className='py-6 px-0 sm:py-8 mt-4 border-2 shadow-inner rounded-md xl:w-1/2 flex flex-col gap-4'>
                                <div className='border-b-2 m-4 p-4'>
                                    <h2 className='px-4 text-2xl sm:text-3xl font-semibold font-montserrat text-[#7f7f7f]'>Shipping: </h2>
                                    <div className='px-8 py-4 text-lg'>
                                        <p><span className='font-bold'>Name: </span>{order.user.name}</p>
                                        <p><span className='font-bold'>Email: </span>{order.user.email}</p>
                                        <p><span className='font-bold'>Address: </span> {order.shippingAddress.address + ", " + order.shippingAddress.country + ", " + order.shippingAddress.city + " - " + order.shippingAddress.postalCode}</p>
                                        <p><span className='font-bold'>Is Delivered ?: </span><span className={`${order.isDelivered ? "text-green-500" : "text-red-500"} font-semibold`}> {order.isDelivered ? "Yes" : "No"} </span>  </p>

                                    </div>
                                </div>

                                <div className='border-b-2 m-4 p-4'>
                                    <h2 className='px-4 text-2xl sm:text-3xl font-semibold font-montserrat text-[#7f7f7f]'>Payment Method: </h2>
                                    <div className='px-8 py-4 text-lg'>
                                    <p><span className='font-bold'>Method: </span> {order.paymentMethod}</p>
                                    <p><span className='font-bold'>Is Paid ?: </span><span className={`${order.isPaid ? "text-green-500" : "text-red-500"} font-semibold`}> {order.isPaid ? "Yes" : "No"} </span>  </p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className='px-4 text-2xl sm:text-3xl font-semibold font-montserrat text-[#7f7f7f]'>Order Items: </h2>
                
                                    {order.orderItems.length === 0 ? (
                                        
                                        <div className='text-center py-8'>
                                            <h1 className='text-2xl font-semibold font-montserrat text-[#7f7f7f]'>Your Cart is Empty</h1>
                                        </div>
                                    ) : (
                                        <>
                                            <section className="flex flex-col gap-4 sm:px-16 py-8">
                                                {order.orderItems.map((item) => {
                                                    return (
                                                        <Link to={`/product/${item.product}`}>
                                                            <div className='border-b-2 ' key={item._id + item.size}>
                                                                <OrderComponent item={item} />
                                                            </div>
                                                        </Link>
                                                        
                                                    );
                                                })}
                                            </section>
                                        </>
                                    )}
                                </div>

                                
                            </div>
            
                            
                            <div className='sm:px-16 px-4 pt-4 py-16 sm:py-8 mt-4 border-2 shadow-xl xl:w-1/2'>
                                <div className='px-8 pt-2 pb-8 text-xl'>
                                    <div className='flex justify-between'>
                                        <p>Items Price: </p>
                                        <p className='text-coral-red'>₹ {order.itemPrice}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Shipping Price: </p>
                                        <p className='text-coral-red'>₹ {(order.orderItems.length === 0) ? 0 : order.shippingPrice}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p>Tax Price: </p>
                                        <p className='text-coral-red'>₹ {order.taxPrice}</p>
                                    </div>
                                    <div className='flex justify-between text-2xl font-bold sm:text-3xl'>
                                        <p className=''>Total Price: </p>
                                        <p className='text-coral-red'>₹ {(order.orderItems.length === 0) ? 0 :order.totalPrice}</p>
                                    </div>
            
                            
                                </div>
                            </div>
                            
                            
                        </div>
            
                        <div className='flex justify-center items-center mt-8'>
                            <p className='text-2xl font-montserrat text-[#7f7f7f] font-semibold'>Thank you for shopping with us.</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default OrderDetailScreen