import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState, useRef } from 'react'
import { hide, show } from '../assets/icons'
import { useDispatch } from 'react-redux'
import { useProfileMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'


const ProfileScreen = () => {
    const {userInfo} = useSelector((state) => state.auth);
   
    const [showPassword, setShowPassword] = useState(false);
    const passwordRef = useRef(null);
    const [email, setEmail] = useState(userInfo.email);
    const [password, setPassword] = useState("");
    const [name, setName] = useState(userInfo.name);
    // console.log(userInfo);

    useEffect(() => {
        if(userInfo) {
            setName(userInfo.name);
            setEmail(userInfo.email);

        }
    }, [userInfo, userInfo.name, userInfo.email]);


    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
        setTimeout(() => passwordRef.current?.focus(), 0);
    };

    const [confirmPassword, setConfirmPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const confirmPasswordRef = useRef(null);

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
        setTimeout(() => confirmPasswordRef.current?.focus(), 0);
    };

    const[showErrorDialogBox, setShowErrorDialogBox] = useState(false);
    const doNothing = () => {
        setShowErrorDialogBox(false);
    }

    const[showSuccessDialog, setShowSuccessDialog] = useState(false);
    const doNothing2 = () => {
        setShowSuccessDialog(false);
    }
    
    const dispatch = useDispatch();
    const [updateProfile, {isLoading}] = useProfileMutation();

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const res = await updateProfile({name, email, password}).unwrap();
            dispatch(setCredentials({...res}));
            setShowSuccessDialog(true);
        } catch (error) {
            console.log(error);
            setShowErrorDialogBox(true);
            
        }
        
        console.log("Submit Handler Called!");
    }

    return (
        <div className='w-full px-4 py-24'>
            <div className='w-1/2 lg:w-1/4'>
                <h1 className='text-3xl sm:text-4xl font-bold text-black'>User Profile</h1>
                <div className='py-8'>
                    <form className='flex flex-col gap-4' onSubmit={submitHandler}>
                        <label className='flex flex-col gap-2'>
                            Name: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='focus:outline-none bg-[#fffbfb00]' type= "text" value={name} onChange={(e) => setName((a) => a = e.target.value)} />
                                <img className='w-auto h-6' src="#" alt="" />
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Email: 
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red'>
                                <input className='focus:outline-none bg-[#fffbfb00]' type= "email" value={email} onChange={(e) => setEmail((a) => a = e.target.value)} />
                                <img className='w-auto h-6' src="#" alt="" />
                            </div>
                        </label>
                        
                        <label className='flex flex-col gap-2'>
                            Password:
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red relative'>
                                <input
                                    ref={passwordRef}
                                    className='focus:outline-none bg-transparent w-full'
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword((a) => a = e.target.value)}
                                    
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3"
                                    onClick={() => togglePasswordVisibility()}
                                >
                                    <img width={20} src={showPassword ? hide : show} alt="Hide or show password" />
                                </button>
                            </div>
                        </label>

                        <label className='flex flex-col gap-2'>
                            Confirm Password:
                            <div className='flex p-2 border-2 border-gray-200 bg-white rounded-md focus-within:border-coral-red relative'>
                                <input
                                    ref={passwordRef}
                                    className='focus:outline-none bg-transparent w-full'
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword((a) => a = e.target.value)}
                                    
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-3"
                                    onClick={() => toggleConfirmPasswordVisibility()}
                                >
                                    <img width={20} src={showConfirmPassword ? hide : show} alt="Hide or show password" />
                                </button>
                            </div>
                        </label>
                        
                        <button type='submit' className={`border-2 border-[#5c5742] rounded-md p-4 bg-[#EBE5C2] font-bold text-xl ${confirmPassword === password ? "cursor-pointer hover:text-white hover:bg-[#5c5742]" : "cursor-not-allowed border-gray-400 text-gray-400 bg-gray-300"}`} disabled={confirmPassword !== password}>
                            Update
                        </button>
    
                        {/* <button onClick={() => toast.success("Toast test!")} className="border-2 p-2 bg-green-500 text-white">
                            Test Toast
                        </button> */}
    
                        {/* <input className='border-2 rounded-md bg-coral-red text-white p-4 cursor-pointer hover:bg-[#f05d4d] font-bold text-xl' type='submit' value={"Login"} /> */}
                        
                    </form>
                </div>
            </div>

            {showErrorDialogBox && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#ebe5c244] bg-opacity-50">
                    <div className="bg-[#ffffff] p-6 border-2 border-red-500 rounded-lg shadow-lg">
                        <p className="text-lg font-bold mb-4">⚠️ Invalid Email or Password❗</p>
                        <div className="flex justify-end gap-4">
                        <button onClick={doNothing} className="border-2 border-[#5c5742] rounded-md p-4 bg-[#EBE5C2] font-bold cursor-pointer hover:text-white hover:bg-[#5c5742]">Ok</button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#ebe5c244] bg-opacity-50">
                    <div className="bg-[#ffffff] p-6 border-2 border-green-500 rounded-lg shadow-lg">
                        <p className="text-lg font-bold mb-4">User Info Updated Successfully✅</p>
                        <div className="flex justify-end gap-4">
                        <button onClick={doNothing2} className="border-2 border-[#5c5742] rounded-md p-4 bg-[#EBE5C2] font-bold cursor-pointer hover:text-white hover:bg-[#5c5742]">Ok</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileScreen