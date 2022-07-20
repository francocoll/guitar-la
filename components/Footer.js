import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.conteined}`}>
                <nav className={styles.navigate}>
                    <Link href="/">Home</Link>
                    <Link href="/nosotros">About os</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/shop">Shop</Link>
                </nav>
                <p className={styles.copyright}>All rights</p>
            </div>
        </footer >
    )
}

export default Footer