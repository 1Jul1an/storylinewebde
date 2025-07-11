import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Storyline',
    description: 'Created by: Julian/Sizar und Felix/Flixxx'
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}
