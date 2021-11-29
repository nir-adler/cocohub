import * as React from 'react'
import { BsBell } from "react-icons/bs"
import { AiOutlineQuestionCircle } from "react-icons/ai"
import Loader from "react-loader-spinner"




const TopMenu = ({ botName }) => {
    return <div id="top">
        <img
            width="378"
            height="57"
            src="https://cache.cocohub.ai/wp-content/uploads/2021/06/cropped-Asset-2.png"
            alt=""
            id="sitelogo"
        />
        <div id='top-menu-right'>
            <BsBell
                color='#fff'
                size='2vw'
            />
            <AiOutlineQuestionCircle
                color='#fff'
                size='2vw'
            />
            {botName
                ? <div>{botName}</div>
                : <Loader
                    type="ThreeDots"
                    height={30}
                    width={30}
                    color='#fff'
                />
            }
        </div>
    </div>
}



export default TopMenu