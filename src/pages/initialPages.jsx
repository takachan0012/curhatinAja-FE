import React from "react";
import { Button } from "@components/ui/button";
import { authLogin } from "@utils/isLogin";
import { Navigate } from "react-router-dom";
import IconSpeak from "@assets/user-speak-rounded-svgrepo-com.svg"

const InitialPage = () => {
    const isLogin = authLogin();
    return (
        <>
            {isLogin ? <Navigate to="/feeds" /> :
                <div className="flex flex-col items-center">
                    <header className="mt-11 w-11/12 bg-[#111020] min-h-[100px] p-4 drop-shadow-[35px_35px_35px_35px_rgba(234, 234, 234, 1)] flex items-center justify-between border-2 border-white">
                        <div className="flex gap-2 items-center">
                            <img src={IconSpeak} alt="icon-utarakan" className="h-[50px]" />
                            <h1 className="header text-[#97FE99] text-[36px]">UTARAKAN</h1>
                        </div>
                        <div className="text-[24px] flex gap-2 items-center">
                            <h1>Features</h1>
                            <h1>Testimonials</h1>
                        </div>
                        <Button className="text-[24px]">Mulai Berbicara Sekarang!</Button>
                    </header>
                </div>
            }
        </>
    )
}

export { InitialPage }