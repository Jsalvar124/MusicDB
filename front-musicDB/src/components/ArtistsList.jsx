import { ArtistCard } from "./ArtistCard"
import { useEffect, useState} from "react"

export function ArtistsList() {

    const [allArtists, setArtists] = useState([]) //array vacio para inicializar las canciones
    const artistsEndPoint = 'http://localhost:3000/api/artists'
    

    //fetch de artistas
    useEffect(() => {
        fetch(artistsEndPoint)
            .then(response => {
                return response.json()
            })
            .then(allArtists => {
                console.log(allArtists)
                console.log("el tipo de dato es " + typeof (allArtists))
                setArtists(allArtists.data)

            })
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            <h3 className="summary-text" style={{ padding: "8px 16px" }}>Artists List</h3>
            <p className="summary-text" style={{ padding: "8px 16px" }}>Total artists: {allArtists.length} </p>

            {allArtists.map((artist) => {

                return (
                    <ArtistCard artist={artist} key={artist.id} />
                )
            })}


        </>
    )
}