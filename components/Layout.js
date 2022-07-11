import Head from "next/head"
import Header from "./Header"

const Layout = ({ children, page }) => {
    return (
        <div>
            <Head>
                <title>GuitarLa - {page}</title>
                <meta name="description" content="Website guitar" />
            </Head>
            <Header />
            {children}
            <div>
                <span>sasa</span>
                <p>sa</p>
            </div>
        </div>
    )
}

export default Layout