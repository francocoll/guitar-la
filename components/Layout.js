import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, page }) => {
    return (
        <div>
            <Head>
                <title>GuitarLa - {page}</title>
                <meta name="description" content="Website guitar" />
            </Head>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout