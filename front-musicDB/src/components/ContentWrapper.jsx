import '../assets/css/App.css'
import { Footer } from "./Footer"
import { Header } from "./Header"

export function ContentWrapper() {
    return (
        <>
        <div className='content-wrapper'>
            <Header />
            <Footer />
        </div>
        </>
    )
}