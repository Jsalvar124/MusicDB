import { Link, Route, Routes } from 'react-router-dom';
import { SongsList } from './SongsList';
import { AlbumsList } from './AlbumsList';
import { ArtistsList } from './ArtistsList';
import { Index } from './Index';
import { useEffect, useState } from "react"
import '../assets/css/Header.css'

export function Header() {

    const [screenMode, setScreenMode]=useState('light')

    let navBarClass = screenMode=='light'
    ?"navbar navbar-expand-lg navbar-light bg-light"
    :"navbar navbar-expand-lg navbar-dark bg-dark"

    function handleClickDark(e){
        e.preventDefault()
        setScreenMode('dark')
        localStorage.setItem('mode', 'dark');
        
    }

    function handleClickLight(e){
        e.preventDefault()
        setScreenMode('light')
        localStorage.setItem('mode', 'light');       

    }

    return (
        <>
            <header>
                <nav className={navBarClass} id="navBar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><i className="fa-solid fa-music"></i> Music DB</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " to="/songs">Songs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/albums">Albums</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/artists">Artists</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Genres</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Mode
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a onClick={handleClickLight} className="dropdown-item lightMode" href="#">Light mode</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a onClick={handleClickDark} className="dropdown-item darkMode" href="#">Dark mode</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <form className="d-flex" role="search" method="GET" action="/songs/results">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="keyWord" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="main-section">

            <Routes>
                <Route path='/' element={<Index />}/>
                <Route path='/songs' element={<SongsList limit={100} offset={0}/>}/>
                <Route path='/albums' element={<AlbumsList />}/>
                <Route path='/artists' element={<ArtistsList />}/>

            </Routes>   
            </main>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
        </>
    )

}



