// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'Your App',
  description: 'EngiGrow or your project description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}