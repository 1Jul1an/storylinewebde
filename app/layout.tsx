import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Storyline',
    description: 'Created by: Julian | GitHub:@1Jul1an und Felix | GitHub: @Flixxx-Felix'
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
