"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavLinks = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState([true,true,true,true,true]);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isOnTop, setIsOnTop] = useState(true);

	useEffect(() => {
        if (isFirstLoad) {
            loading.forEach((_, index) => {
                const timer = setTimeout(() => {
                    setLoading((prevLoading) => {
                        const newLoading = [...prevLoading];
                        newLoading[index] = false;
                        return newLoading;
                    });
                }, 3000 + (500 * index));

                return () => clearTimeout(timer);
            });
            setIsFirstLoad(false)
        }
	}, [isFirstLoad, pathname, loading]);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY === 0) {
            setIsOnTop(true);
          } else {
            setIsOnTop(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <nav className={`flex flex-col lg:flex-row gap-0 lg:gap-6 text-2xl fixed z-10 bottom-[50%] right-[-25%] hover:right-[0%] lg:right-[50%] hover:lg:right-[50%] translate-y-[50%] lg:translate-y-0 translate-x-0 lg:translate-x-[50%] transition-all duration-500 ${pathname == "/" ? "lg:bottom-[15%] lg:top-auto" : (pathname != "/no-fun") ? (isOnTop ? "lg:bottom-auto lg:top-[33px]" : "lg:bottom-auto lg:top-[-40px] hover:lg:top-[0px]") : "hidden"}`}>
            <Link href="/" className={`${loading[0] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}><span className={`hoverable bg-[#FFEAC5] p-4 w-[100px] lg:w-auto shadow-xl ${isOnTop ? "lg:shadow-none" : "lg:shadow-xl" } cursor-pointer`}>Home</span><span className={pathname == "/" ? "block w-4 lg:w-10/12 h-[2rem] lg:h-2 bg-black" : "block w-4 lg:w-0 group-hover:h-[2rem] group-hover:lg:h-2 group-hover:lg:w-10/12 transition-all duration-500 h-0 lg:h-2 bg-black"}></span></Link>
            <Link href="/blog" className={`${loading[1] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}><span className={`hoverable bg-[#FFEAC5] p-4 w-[100px] lg:w-auto shadow-xl ${isOnTop ? "lg:shadow-none" : "lg:shadow-xl" } cursor-pointer`}>Blog</span><span className={pathname.includes("/blog") ? "block w-4 lg:w-10/12 h-[2rem] lg:h-2 bg-black" : "block w-4 lg:w-0 group-hover:h-[2rem] group-hover:lg:h-2 group-hover:lg:w-10/12 transition-all duration-500 h-0 lg:h-2 bg-black"}></span></Link>
            <Link href="/project" className={`${loading[2] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}><span className={`hoverable bg-[#FFEAC5] p-4 w-[100px] lg:w-auto shadow-xl ${isOnTop ? "lg:shadow-none" : "lg:shadow-xl" } cursor-pointer`}>Project</span><span className={pathname.includes("/project") ? "block w-4 lg:w-10/12 h-[2rem] lg:h-2 bg-black" : "block w-4 lg:w-0 group-hover:h-[2rem] group-hover:lg:h-2 group-hover:lg:w-10/12 transition-all duration-500 h-0 lg:h-2 bg-black"}></span></Link>
            <Link href="/hobby" className={`${loading[3] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}><span className={`hoverable bg-[#FFEAC5] p-4 w-[100px] lg:w-auto shadow-xl ${isOnTop ? "lg:shadow-none" : "lg:shadow-xl" } cursor-pointer`}>Hobby</span><span className={pathname.includes("/hobby") ? "block w-4 lg:w-10/12 h-[2rem] lg:h-2 bg-black" : "block w-4 lg:w-0 group-hover:h-[2rem] group-hover:lg:h-2 group-hover:lg:w-10/12 transition-all duration-500 h-0 lg:h-2 bg-black"}></span></Link>
            <Link href="/contact" className={`${loading[4] ? "opacity-0" : "opacity-1" } flex flex-row-reverse lg:flex-col items-center group transition-all duration-500`}><span className={`hoverable bg-[#FFEAC5] p-4 w-[100px] lg:w-auto shadow-xl ${isOnTop ? "lg:shadow-none" : "lg:shadow-xl" } cursor-pointer`}>Contact</span><span className={pathname.includes("/contact") ? "block w-4 lg:w-10/12 h-[2rem] lg:h-2 bg-black" : "block w-4 lg:w-0 group-hover:h-[2rem] group-hover:lg:h-2 group-hover:lg:w-10/12 transition-all duration-500 h-0 lg:h-2 bg-black"}></span></Link>
        </nav>
    );
};

export default NavLinks;
