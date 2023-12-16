import './globals.css';
import { Inter } from 'next/font/google';
import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';
import { ConfettiProvider } from '@/components/provider/confetti-provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <ConfettiProvider />
                    <ToasterContext />
                    {children}
                </AuthContext>
            </body>
        </html>
    );
}
