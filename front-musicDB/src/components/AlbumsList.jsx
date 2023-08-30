import { AlbumCard } from "./AlbumCard"
import { useEffect, useState } from "react"

export function AlbumsList() {

    const [allAlbums, setAlbums] = useState([]) //array vacio para inicializar las canciones
    const albumsEndPoint = 'http://localhost:3000/api/albums'

    const [showAll, setShowAll] = useState(false)
    let textInButton =showAll? "Hide All": "Show All"

    //fetch de albums
    useEffect(() => {
        fetch(albumsEndPoint)
            .then(response => {
                return response.json()
            })
            .then(albums => {
                console.log(albums)
                setAlbums(albums.data)

            })
            .catch(error => console.log(error))
    }, [])


    function handleClickShowAll(){
        setShowAll(!showAll)
    }
    
    return (
        <>
            <h3 className="summary-text" style={{ padding: "8px 16px" }}>Albums List</h3>
            <button onClick={handleClickShowAll} className='btn btn-outline-success ms-4' type="submit" >{textInButton}</button>
            <p className="summary-text" style={{ padding: "8px 16px" }}>Total albums: {allAlbums.length} </p>
            
            {allAlbums.map((album, id) => {

            return (
                <AlbumCard album={album} key={album.id} showAll={showAll} />
            )
            })}
        </>
    )
}