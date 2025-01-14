import { Inter } from "next/font/google";
import '../../styles/globals.css';
import AdSense from '../components/Adsense'

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <AdSense pId="ca-pub-9408883643416842" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    
  );
};

export default RootLayout;
