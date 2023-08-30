import { useEffect, useState } from "react"


export function SongCard({song}) {

    const duration= Math.floor(song.milisegundos / 1000 / 60)+":"+((song.milisegundos / 1000) % 60).toFixed(0).padStart(2, '0')
    
    const [screenMode, setScreenMode]=useState(localStorage.mode?localStorage.mode:'light')
    console.log("El local storage es: "+localStorage.mode)

    let cardClass = screenMode =='light'
    ?"list-group-item list-group-item-action"
    :"list-group-item list-group-item-action list-group-item-dark"
    
    return (
        <>
            <div className="list-group">
                <a href="#" className={cardClass}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 id="mb-1">{song.id}. {song.titulo}</h5>
                        <small className="text-muted"><i className="fa-regular fa-clock"></i> {duration}</small>
                    </div>
                    <p id="mb-0">{song.album}</p>
                    <small className="text-muted">{song.artista}</small>
                </a>
            </div>
        </>
    )
}


