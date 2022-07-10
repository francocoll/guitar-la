import Link from 'next/link'
import styles from '../styles/Header.module.css'
const Header = () => {
    return (
        <header className={styles.hea}>
            <div className="contenedor">
                <div>

                </div>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/nosotros">About os</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/shop">Shop</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header