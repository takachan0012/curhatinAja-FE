import React from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogContent
} from "@components/ui/dialog";

const VerificationKey = ({ isOpen }) => {
    return (
        <Dialog open={isOpen}>
            <DialogContent className='p-11 flex flex-col bg-[#DFFF67] gap-5'>
                <DialogHeader className='flex flex-row justify-between lg:justify-normal'>
                    <div className="lg:9/12">
                        <DialogTitle className='text-2xl text-left'>Verifikasi private key</DialogTitle>
                    </div>
                </DialogHeader>
                <Input placeholder='Private key...' className='border-2 border-black w-full' />
                <Button className='font-bold w-full'>Verifikasi</Button>
            </DialogContent>
        </Dialog >
    )
}

export { VerificationKey }