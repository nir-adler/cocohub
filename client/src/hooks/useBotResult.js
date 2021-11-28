import * as React from 'react'
import cocohubApi from '../api/cocohubApi'

export default () => {
    const [botName, setBotName] = React.useState(null)
    const [error, setError] = React.useState(null)
    const getBotName = async () => {
        try {
            const response = await cocohubApi.get('/graphql')
            // console.log(response.data)
            setBotName(response.data.bot.firstName)
        } catch (e) {
            // console.log('error')
            // console.log(e)
            // console.log(e.code)
            // console.log(e.name)
            // console.log(e.message)
            setError(e.message)
        }
    }

    React.useEffect(() => {
        getBotName()
    })

    return [botName, getBotName, error]
}