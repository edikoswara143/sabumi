import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
                <h1 className="text-6xl font-bold text-rose-900">404</h1>
                <p className="mt-4 text-gray-500">
                    Halaman yang kamu cari tidak ditemukan.
                </p>

                <Link
                    href="/"
                    className="mt-6 rounded-full bg-rose-900 px-6 py-2 text-white transition hover:opacity-80"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    )
}
