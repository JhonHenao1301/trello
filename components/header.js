import Image from "next/image"

function Header() {
    return (
        <header className="bg-black/40">
            <p className="logo">
                <Image src="/logo.png" width={40} height={40} alt="" />
                <a  className="block text-center uppercase text-logo" href="https://LeonidasEsteban.com">LeonidasEsteban.com</a>
            </p>
        </header>
    )
}

export default Header
