import React from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogContent
} from "@components/ui/dialog";
import { CopyIcon } from "@radix-ui/react-icons"

const CreatedKey = () => {
    return (
        <Dialog open='true'>
            <DialogContent className='p-11 flex flex-col bg-[#DFFF67] gap-5'>
                <DialogHeader className='flex flex-row justify-between lg:justify-normal'>
                    <div className="lg:9/12">
                        <DialogTitle className='text-2xl text-left'>Mantapssss...</DialogTitle>
                        <DialogDescription className='text-base lg:text-xl font-semibold'>Simpan private key ini ditempat yang aman!</DialogDescription>
                    </div>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <Input readonly='true' defaultValue='xxxksjglaja' className='border-2 border-black w-full' />
                    <Button type="button" size="sm" className="border-2 border-black h-10 -mt-2">
                        <span className="sr-only">Copy</span>
                        <CopyIcon className="h-4 w-4" />
                    </Button>
                </div>
                <Button className='font-bold w-full'>Lanjut</Button>
            </DialogContent>
        </Dialog >
    )
}

export { CreatedKey }