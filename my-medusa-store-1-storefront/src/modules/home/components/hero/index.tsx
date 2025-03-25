import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  const navItems = [
    { label: "Vinilos", href: "/store" },
    { label: "Bases Antideslizantes", href: "/store" },
    { label: "Recambios", href: "/store" },
    { label: "Patinetes Eléctricos", href: "/store" },
  ]

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className=" inset-0 z-10 flex flex-col justify-center items-center text-center">
        <ul className="flex justify-center items-center gap-6 w-full py-4 text-gray-400">
          {navItems.map((item, i) => (
            <li key={i} className="hover:underline cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <Image src="/hero.jpg" alt="hero-image" width={2000} height={830} />
      </div>
    </div>
  )
}

export default Hero
