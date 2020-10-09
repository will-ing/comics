import React from 'react'
import Link from 'next/link'

export default function Nav() {
    return (
        <div>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </div>
    )
}
