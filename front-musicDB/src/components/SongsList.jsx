import { useEffect, useState } from "react"
import { SongCard } from "./songCard"
import '../assets/css/SongsList.css'

export function SongsList(props) {

    let [allSongs, setSongs] = useState([]) //array vacio para inicializar las canciones
    let [page, setPage] = useState(1) //por defecto incia en la página 1.
    let [offset, setOffset] = useState(0) //por defecto muestra desde la canción con id cero.
    let limit=500;
    let songsSlice=allSongs.slice(offset, offset+limit)

    const songsEndPoint = `http://localhost:3000/api/songs?limit=${props.limit}&offset=${props.offset}`
    
    useEffect(() => {
        fetch(songsEndPoint)
            .then(response => {
                return response.json()
            })
            .then(songs => {
                console.log(songs)
                setSongs(songs.data)

            })
            .catch(error => console.log(error))
    }, [])

    function handleClickNextPage(){
        setPage(page++)
        setOffset(offset+=limit)
        songsSlice=allSongs.slice(offset, offset+limit)

    }

    function handleClickPreviousPage(){
        setPage(page--)
        setOffset(offset-=limit)
        songsSlice=allSongs.slice(offset, offset+limit)

    }

    // setSongs(allSongs.slice(props.offset, props.offset+props.limit))

    return (
        <>

            <h3 className="summary-text" style={{ padding: "8px 16px" }}>Songs List</h3>
            { offset!=0 && <button onClick={handleClickPreviousPage} className='btn btn-outline-success mx-3' type="submit" >Back</button>}
            { offset+limit<allSongs.length && <button onClick={handleClickNextPage} className="btn btn-outline-success mx-3" type="submit" >Next</button>}
            <p className="summary-text" style={{ padding: "8px 16px" }}>Songs from {offset+1} to {Math.min(offset + page*limit, allSongs.length)}</p>
        
            {songsSlice.map((song, id) => {

                return (
                    <SongCard song={song} key={id} />
                )
            })}
        </>
    )
}