import { useState } from "react"


export function ArtistCard({ artist }) {

    const albumCount = artist.albums.length
    const [displayAlbums, setDisplayAlbums]=useState(false)


    function handleClick(e){
        e.preventDefault()
        setDisplayAlbums(!displayAlbums)
    }


    return (
        <>
            <div className="list-group" >
                <a onClick={handleClick} href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{artist.nombre}</h5>
                        <small className="text-muted">{albumCount} albums</small>
                    </div>
                    {artist.albums.map((album, id) => {
                        return (
                            displayAlbums && <p key={id} className="mb-1">{album.titulo}</p>
                        )
                    })}

                </a>
            </div>
        </>
    )
}