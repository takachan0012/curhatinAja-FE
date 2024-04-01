import React from "react";
import { Button } from "@components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@components/ui/card";
import { Textarea } from "@components/ui/textarea";
import { users } from "@utils/dataSample";
import { authLogin } from "@utils/isLogin";
import { Navigate } from "react-router-dom";
import { Login } from "@components/layout/login";
import { DialogTrigger } from "@components/ui/dialog";

const InitialPage = () => {
    const isLogin = authLogin();
    return (
        <>
            {isLogin ? <Navigate to="/feeds" /> :
                <div className="flex flex-col gap-7 p-3 pb-7 bg-[#DFFF67] h-max lg:h-screen lg:justify-evenly lg:items-center lg:flex-row">
                    <section>
                        <header className="font-bold ">
                            <h3 className="text-[2rem] lg:text-[50px]">Kenapa? </h3>
                            <p className="font-black text-[3rem] lg:text-[128px]">
                                <span>Sini </span>
                                <span>CERITA</span>
                            </p>
                        </header>
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <Textarea
                                className='border-2 border-black h-[200px] text-base resize-none'
                                placeholder='Tulis sesuatu...'
                            />
                            <Login>
                                <DialogTrigger>
                                    <Button className='font-bold text-[25px] w-full'>Post</Button>
                                </DialogTrigger>
                            </Login>
                        </div>
                    </section>
                    <Card className='p-4 -ms-2 bg-[#CAFEDB] h-[614px] lg:w-[435px] border-2 border-black shadow-custom hover:shadow-[0_0px_0px_rgb(0,0,0)] hover:translate-x-2 hover:translate-y-1 focus:translate-x-2 focus:translate-y-1'>
                        <CardHeader className='flex flex-row justify-between font-bold'>
                            <span>Latest post</span>
                            <Login>
                                <DialogTrigger>
                                    <a href="#" className="underline hover:no-underline">See more</a>
                                </DialogTrigger>
                            </Login>
                        </CardHeader>
                        <CardContent className='px-2 flex flex-col gap-2 overflow-hidden'>
                            {users.map((user, index) => <Card key={index} className='h-[118px] border-2 border-black hover:cursor-pointer'>
                                <CardHeader className='p-2 flex flex-row items-center'>
                                    <CardTitle className='text-[1rem]'>
                                        {user.username}
                                        <span className='text-[1rem] text-slate-500 font-medium'> - 1h</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3 text-[14px]">{user.post}</p>
                                </CardContent>
                            </Card>)}
                        </CardContent>
                    </Card>
                </div>
            }
        </>
    )
}

export { InitialPage }