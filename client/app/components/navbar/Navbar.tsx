import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center items-center text-center py-5 fixed top-5 left-0 z-50">
            <svg fill="currentColor" stroke="currentColor" className="h-10 text-white" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.48 157.62">
            <rect x="33.94" y="23.81" width="108.6" height="19.55" transform="translate(-5.58 44.2) rotate(-27.29)"/>
<rect x="-1.56" y="132.76" width="108.6" height="19.55" transform="translate(-59.48 40.04) rotate(-27.29)"/>
<rect x="15.69" y="80.03" width="108.6" height="19.55" rx="9.77" ry="9.77" transform="translate(-33.39 42.08) rotate(-27.29)"/>
            </svg>
            <h1 className="text-2xl m-2 font-bold tracking-widest text-white">SINC</h1>
        </nav>
    )
}