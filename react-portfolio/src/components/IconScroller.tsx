import React, { useEffect } from "react";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";


function IconScroller() {
    const scrollerRef = React.useRef<HTMLDivElement>(null);
    const scrollerInnerRef = React.useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollerRef.current?.setAttribute("data-animated", "true");
        }

        const icons = scrollerInnerRef.current?.children;
        Array.from(icons as HTMLCollection)?.forEach((child ) => {
            const dup = child.cloneNode(true) as HTMLElement;
            dup.setAttribute("aria-hidden", "true");
            scrollerInnerRef.current?.appendChild(dup);
        });
    }, []);


    return (
        <div className="scroller" ref={scrollerRef}>
            <ul className="scroller__inner" ref={scrollerInnerRef}>
                <li className="icon">
                    <FaPhp />
                </li>
                <li className="icon">
                    <FaReact />
                </li>
                <li className="icon">
                    <FaNodeJs />
                </li>
                <li className="icon">
                    <IoLogoJavascript />
                </li>
                <li className="icon">
                    <SiTypescript />
                </li>
                <li className="icon">
                    <FaPython />
                </li>
                <li className="icon">
                    <FaDatabase />
                </li>
                <li className="icon">
                    <FaDocker />
                </li>
                <li className="icon">
                    <DiMysql />
                </li>
                <li className="icon">
                    <FaSass />
                </li>
                <li className="icon">
                    <FaHtml5 />
                </li>
            </ul>
        </div>
    )
}

export default IconScroller;