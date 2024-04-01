import React from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogContent,
    DialogFooter
} from "@components/ui/dialog";


const Login = ({ children }) => {
    return (
        <Dialog>
            {children}
            <DialogContent className='p-11 flex flex-col bg-[#DFFF67] gap-5 w-11/12'>
                <DialogHeader className='flex flex-row justify-between lg:justify-normal'>
                    <DialogTitle className='text-2xl text-left'>Masukan Private Key</DialogTitle>
                </DialogHeader>
                <Input placeholder='Private key...' className='border-2 border-black w-full' />
                <Button className='font-bold w-full'>Login</Button>
                <DialogFooter>
                    <DialogDescription className='text-sm'>Belum punya akun? <a href="#" className='text-base decoration-solid underline hover:no-underline'>Register</a></DialogDescription>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}

export { Login }