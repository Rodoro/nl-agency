"use client"
import React, { useState } from 'react'
import style from './Switch.module.css'

export type SwitchProps = {
    name: string;
}

const Switch: React.FC<SwitchProps> = ({ name }) => {
    const [active, setActive] = useState(false);

    return (
        <div className={`${style.borderGradient} w-min max-h-[50px] cursor-pointer ${active ? style.focusedBorder : ""}`} onClick={() => setActive(!active)}>
            <div className={(active ? "text-[#FF8D5D]" : "text-white/50") + " text-sm font-medium leading-[normal] whitespace-nowrap"}>{name}</div>
        </div>
    )
}

export default Switch
