import { Button } from "@components/ui/button";
import { authLogin } from "@utils/isLogin";
import { Navigate } from "react-router-dom";
import IconSpeak from "@assets/user-speak-rounded-svgrepo-com.svg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

const InitialPage = () => {
    const isLogin = authLogin();
    return (
        <>
            {isLogin ? <Navigate to="/feeds" /> :
                <div className="w-screen flex justify-center py-4">
                    <header className="flex justify-between items-center w-11/12 bg-black-secondary border border-gray-primary h-fit p-4 rounded-lg">
                        <section className="flex justify-start gap-1 items-center">
                            <img src={IconSpeak} alt="icon-curhatinaja" className="w-12" />
                            <h1 className="text-green-primary font-bold text-xl">CurhatinAja</h1>
                        </section>
                        <section>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="bg-black-secondary data-[state=open]:border-2 border-green-primary focus:outline-none rounded-md p-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-screen border-none mt-5 flex justify-center p-0">
                                    <div className="flex flex-col gap-2 items-center w-11/12 bg-black-secondary border border-gray-primary h-fit p-4 rounded-lg">
                                        <DropdownMenuItem className="w-full text-white px-4 py-2 rounded-md border-b border-green-primary">
                                            <a href="http://" className="bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text">Features</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="w-full text-white px-4 py-2 rounded-md border-b border-green-primary">
                                            <a href="http://" className="bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text">Testimonials</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="w-full">
                                            <Button className='w-full'>
                                                Mulai Bicara Sekarang!
                                            </Button>
                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </section>
                    </header>
                </div>
            }
        </>
    )
}

export { InitialPage }