import '../styles/globals.css';
import { AuthProvider } from '../contexts/AuthContext'; // pastikan path-nya sesuai ya

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
