import React from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import Icon from "@assets/volume-svgrepo-com.svg";
import { Card, CardContent, CardTitle, CardFooter } from "@components/ui/card";
import { DialogTrigger } from "@components/ui/dialog";
import { Register } from "@components/layout/register";


const Login = () => {
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <header className="w-1/2 p-11 flex flex-col justify-end">
                <div className="flex items-center gap-2 my-3">
                    <img src={Icon} alt="icon-utarakan" className="h-[45px]" />
                    <h1 className="font-bold text-2xl">Utarakan !selatan</h1>
                </div>
                <p className="text-lg">Dipenuhi dengan segala drama kehidupan tanpa jaminan spoiler? Tenang saja! Utarakan hadir sebagai penyimpan rahasia terpercaya untuk mengeluarkan semua keluh kesah hidup Anda secara anonim. Dalam bahasa yang lebih sederhana: kami adalah tempat aman di mana Anda bisa curhat tanpa takut digibahin oleh tetangga sebelah!</p>
            </header>
            <section className="w-1/2 p-11">
                <Card className='border-2 border-black'>
                    <CardContent className='p-6 flex flex-col gap-3'>
                        <CardTitle className='text-center my-7'>Masukan Private Key</CardTitle>
                        <Input placeholder='Private Key...' className='border-2 border-black w-full' />
                        <Button className='font-bold w-full text-lg'>Login</Button>
                    </CardContent>
                    <CardFooter className='p-6 flex flex-col gap-3'>
                        <span>Belum punya akun? </span>
                        <Register>
                            <DialogTrigger>
                                <span className='font-light text-[25px] w-full underline hover:no-underline'>Register</span>
                            </DialogTrigger>
                        </Register>
                    </CardFooter>
                </Card>
            </section>
        </div>
    )
}

export { Login }