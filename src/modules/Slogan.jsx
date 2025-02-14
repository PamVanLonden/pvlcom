import React from 'react';
import { FaPaintBrush } from "react-icons/fa";
import { TbMoodHappyFilled,  } from "react-icons/tb";
import { IoCodeSlashSharp } from "react-icons/io5";

function Slogan() {
    return (
        <>
            Art <i><FaPaintBrush /></i>
            &nbsp;+&nbsp;
            Code <i><IoCodeSlashSharp /></i>
            &nbsp;=&nbsp;
            Joy <i><TbMoodHappyFilled /></i>
        </>
    );
}
export default Slogan;
