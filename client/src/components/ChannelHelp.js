import * as React from 'react'
import { AiOutlineClose } from "react-icons/ai"



const ChannelHelp = ({ channel }) => {
    const [helpText, setHelpText] = React.useState(null)
    const closeHelp = document.querySelector('#close-help')
    const closeHelpHandler = () => {
        document.querySelector('#help').style.display = 'none'
    }
    // console.log(channel)
    React.useEffect(() => {
        document.querySelector('#help').style.display = 'flex'
        switch (channel) {
            case null:
                return setHelpText('Select Channel')
                case 1:
                return setHelpText('Make Phone-Call')
            case 2:
                return setHelpText('Make Video-Call')
            case 3:
                return setHelpText('Send Email')
            default:
                return setHelpText('')
        }


    }, [channel])

    return <div id="help">
        <AiOutlineClose
            onClick={closeHelpHandler}
            id='close-help' />
        <div>{helpText}</div>

    </div>
}


export default ChannelHelp