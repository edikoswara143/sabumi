import BottomBar from "../components/BottomBar";

export default function RootLayout({ children }) {
    return (

        <>
            <div className="bg-white min-h-screen">
                {children}
            </div>
            <BottomBar />
        </>
    );
}
