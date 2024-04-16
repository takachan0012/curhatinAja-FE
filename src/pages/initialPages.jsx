import { Button } from "@components/ui/button";
import { authLogin } from "@utils/isLogin";
import { Navigate } from "react-router-dom";
import IconSpeak from "@assets/user-speak-rounded-svgrepo-com.svg";
import IncognitoIcon from "@assets/incognito-svgrepo-com.svg";
import PeopleComunityIcon from "@assets/people-community-svgrepo-com.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from "@/components/ui/card";

const InitialPage = () => {
    const isLogin = authLogin();
    return (
        <>
            {isLogin ? <Navigate to="/feeds" /> :
                <div className="w-screen flex-col items-center flex justify-center py-4">
                    <header className="sticky top-4 flex justify-between items-center w-11/12 bg-black-secondary border border-gray-primary h-fit p-4 rounded-lg">
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
                    <section className="w-11/12 my-7">
                        <h2 className="bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text text-5xl lg:text-7xl">Curhatkan,</h2>
                        <h2 className="bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text text-5xl lg:text-7xl">Dengarkan, Mengerti,</h2>
                        <h2 className="bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text text-5xl lg:text-7xl">Mendukung</h2>
                        <p className="text-base my-5 text-left">
                            Selamat datang di CurhatinAja! Kami adalah rumah bagi suara-suara yang belum terdengar, tempat di mana Anda dapat membebaskan beban batin Anda tanpa takut dihakimi. Kami percaya setiap cerita memiliki nilai dan setiap emosi layak didengar. Mari bersama membangun komunitas yang peduli dan mendukung satu sama lain.
                        </p>
                        <Button>Bergabunglah dengan CurhatinAja!</Button>
                    </section>
                    <section className="w-11/12 my-7 flex flex-col gap-3">
                        <h2 className="mb-7 bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text text-3xl lg:text-5xl">Features</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle>Keluh Kesah Tanpa Batas</CardTitle>
                                <CardDescription className='text-white'>
                                    Berbicaralah tanpa batas tentang apa pun yang Anda inginkan, tanpa takut dan tanpa batasan.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img src={IconSpeak} alt="icon-speak" />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Dukungan Komunitas</CardTitle>
                                <CardDescription className='text-white'>
                                    Temukan dukungan dan solidaritas dari komunitas yang memahami Anda sepenuhnya.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img src={PeopleComunityIcon} alt="icon-people-comunity" />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Privasi Terjamin</CardTitle>
                                <CardDescription className='text-white'>
                                    Kami memahami betapa pentingnya privasi Anda. Di CurhatinAja, setiap cerita Anda akan tetap aman.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img src={IncognitoIcon} alt="icon-incognito-icon" />
                            </CardContent>
                        </Card>
                    </section>
                    <section className="w-11/12 my-7 flex flex-col gap-3">
                        <div className="mb-7 ">
                            <h2 className="bg-gradient-to-r from-slate-400 to-white text-transparent bg-clip-text text-3xl lg:text-5xl">Testimonials</h2>
                            <p>Pendapat Pengguna tentang CurhatinAja!</p>
                        </div>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-7xl text-white'>"</CardTitle>
                                <CardDescription className='text-white'>
                                    Terima kasih, CurhatinAja! Saya merasa didengar dan didukung di sini.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='flex gap-2 items-center'>
                                <img src={IncognitoIcon} alt="icon-incognito-icon" className="w-11" />
                                <p className="text-white text-base">Anonymous-XXX</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-7xl text-white'>"</CardTitle>
                                <CardDescription className='text-white'>
                                    CurhatinAja~ memberi saya tempat untuk membebaskan diri saya tanpa rasa takut.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='flex gap-2 items-center'>
                                <img src={IncognitoIcon} alt="icon-incognito-icon" className="w-11" />
                                <p className="text-white text-base">Anonymous-XXX</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-7xl text-white'>"</CardTitle>
                                <CardDescription className='text-white'>
                                    CurhatinAja! You are great PLATFORM
                                </CardDescription>
                            </CardHeader>
                            <CardContent className='flex gap-2 items-center'>
                                <img src={IncognitoIcon} alt="icon-incognito-icon" className="w-11" />
                                <p className="text-white text-base">Anonymous-XXX</p>
                            </CardContent>
                        </Card>
                    </section>
                    <footer className="w-11/12 text-base text-[#7887B0] mt-7">
                        &copy;2024 CurhatinAja. Hak Cipta Sumber Terbuka | Kebijakan Privasi | Syarat & Ketentuan | Hubungi Kami | Kode Sumber
                    </footer>
                </div>
            }
        </>
    )
}

export { InitialPage }