import { useEffect, useState } from 'react'

const useJsonParseData = (url) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = async (url) => {

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    cache: 'no-cache'
                }
                )
                const data = await response.json()

                return data

            } catch (error) {

                console.error(error);

            } finally {
                (setData(data))
            }
        }
        getData(url)
    }, [])

    return { data }
}

export default useJsonParseData