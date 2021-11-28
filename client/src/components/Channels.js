import * as React from 'react'
import { BiPhoneCall } from "react-icons/bi"
import { MdVideoCall } from "react-icons/md"
import { AiOutlineMail } from "react-icons/ai"


const Channels = ({channel,setChannel}) => {

    const selectIcon=(e,index)=>{
        setChannel(index)
      }

    return <div id="channels">
        <p>Channels</p>
        <div id='channels-icons'>
            <BiPhoneCall
                size='4vw'
                color={channel && channel === 1 ? 'blue' : null}
                onClick={(e) => selectIcon(e, 1)}
                id='icon-1'
            />
            <MdVideoCall
                color={channel && channel === 2 ? 'blue' : null}
                size='4vw'
                onClick={(e) => selectIcon(e, 2)}
                id='icon-2'
            />
            <AiOutlineMail
                color={channel && channel === 3 ? 'blue' : null}
                size='4vw'
                id='icon-3'
                onClick={(e) => selectIcon(e, 3)}
            />
        </div>
        <div id="channels-connect">Connect</div>
    </div>
}


export default Channels