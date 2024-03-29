import React, { useRef } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "@components/ui/card";
import Icon from "@assets/volume-svgrepo-com.svg";
import { users } from "@utils/dataSample";
import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
    MenubarContent,
    MenubarItem
} from "@/components/ui/menubar";
import { Textarea } from "@components/ui/textarea";
import TeddyIcon from "@assets/teddy-bear-animals-svgrepo-com.svg";
const Feeds = () => {
    const textArea = useRef();
    return (
        <div className="bg-[#DFFF67] lg:h-screen lg:w-screen lg:flex ">
            <section className="relative bg-[#CAFEDB] lg:h-screen lg:w-1/4 border-r-2 border-black p-4">
                <header className="flex gap-2 items-center">
                    <img src={Icon} alt="" className="h-[42px]" />
                    <h1 className="font-bold text-lg">Utarakan !selatan</h1>
                </header>
                <div className="flex flex-col gap-2 mt-4 lg:h-4/5 lg:overflow-y-scroll rounded-lg px-3">
                    {users.map((user, index) => <Card key={index} className='h-max border-2 border-black'>
                        <CardHeader className='p-2 flex flex-row items-center'>
                            <CardTitle className='text-[1rem]'>
                                {user.username}
                                <span className='text-[1rem] text-slate-500 font-medium'> - 1h</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="line-clamp-3 text-[14px]">{user.post}</p>
                        </CardContent>
                        <CardFooter>
                            <Button>See more</Button>
                        </CardFooter>
                    </Card>)}
                </div>
                <div className="absolute bottom-9 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[42px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <Menubar className='bg-transparent border-none'>
                        <MenubarMenu>
                            <MenubarTrigger className='bg-transparent font-bold min-w-[12rem] hover:cursor-pointer'>Your_Own_Username</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem className='hover:cursor-pointer'>Logout</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </section>
            <section className="relative lg:w-3/4 p-4">
                <div className="w-4/5 h-3/4 flex flex-col items-center justify-center">
                    <img src={TeddyIcon} alt="" className="h-[292px]" />
                    <span className="text-[2rem] font-bold">You don't look good, you need a hug</span>
                </div>
                <div className="absolute bottom-9 flex justify-center w-4/5 px-4">
                    <Textarea ref={textArea} placeholder='Tulis sesuatu...' className='border-2 border-black h-[36px] resize-none' rows='1' onInput={() => {
                        if (textArea.current.scrollHeight < 296) {
                            textArea.current.style.height = "";
                            textArea.current.style.height = textArea.current.scrollHeight + "px";
                        }
                    }} />
                    <Button className='absolute -right-14 bottom-1 -mt-2 font-bold'>Post</Button>
                </div>
            </section>
        </div>
    )
}

export { Feeds }