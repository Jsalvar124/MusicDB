import { useEffect, useState } from "react"
import '../assets/css/AlbumCard.css'

export function AlbumCard({ album, showAll }) {
    let totalTime = 0;
    album.songs.map(song => {
        totalTime = totalTime + song.milisegundos;
    }
    )

    const duration = Math.floor(totalTime / 1000 / 60) + ":" + ((totalTime / 1000) % 60).toFixed(0).padStart(2, '0')

    const [albumImg, setAlbumImg] = useState("") //array vacio para inicializar las canciones

    const fmApiKey = "b0a2affdc20a5d49ed02da1075cc2c53"

    const albumCoverEndpoint = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${fmApiKey}&artist=${album.artist.nombre}&album=${album.titulo}&format=json`

    const [displayAlbums, setDisplayAlbums]=useState(false)


    //fetch de imagen de portada
    useEffect(() => {
        fetch(albumCoverEndpoint)
            .then(response => {
                return response.json()
            })
            .then(albumData => {
                console.log(albumData.album.image[4]['#text'])
                setAlbumImg(albumData.album.image[4]['#text'])

            })
            .catch(error => console.log(error))
    }, [])



    function handleClick(e){
        e.preventDefault()
        setDisplayAlbums(!displayAlbums)
    }

    return (
        <>
            <div className="list-group">
                <a onClick={handleClick} href="#" className="list-group-item list-group-item-action d-flex ">
                    { !showAll && displayAlbums && <img src={albumImg} alt="Album cover fetched from last.fm/api" className="album-cover p-4" />}
                    { showAll && <img src={albumImg} alt="Album cover fetched from last.fm/api" className="album-cover p-4" />}
                    <div className="text-container w-100">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{album.titulo}</h5>
                            <small className="text-muted">
                                <i className="fa-solid fa-music"></i> {album.songs.length} / <i className="fa-regular fa-clock"></i> {duration}                                 
                                </small>
                        </div>
                        {!showAll && displayAlbums && album.songs.map((song, id) => <p className="mb-1" key={id}>{id+1}. {song.nombre}</p>)}
                        {showAll && album.songs.map((song, id) => <p className="mb-1" key={id}>{id+1}. {song.nombre}</p>)}

                        <small className="text-muted">{album.artist.nombre}</small>
                    </div>
                </a>
            </div>

        </>
    )
}