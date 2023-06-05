import { useEffect, useState } from 'react'

const useJsonParseData = (url) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

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

                const infoArray = await response.json()

                setData(infoArray);
                setLoading(true)

            } catch (error) {

                console.error(error);

            }
        }

        getData(url)

    }, [])

    return { data , loading}

}

export default useJsonParseData