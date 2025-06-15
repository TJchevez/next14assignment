import Link from "next/link"

function Navbar() {
  return (
    <nav className="bg-blue-400">
        <ul className="flex justify-center space-x-4 text-xl p-3">
            <Link href={"/"}>
            <li>Home</li>
            </Link>
            <Link href={"/posts"}>
            <li>Posts</li>
            </Link>
            <Link href={"/contact"}>
            <li>Contact</li>
            </Link>
            <input placeholder="search"/>
        </ul>
    </nav>
  )
}

export default Navbar