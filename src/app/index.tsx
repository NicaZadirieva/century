import { HelmetProvider } from 'react-helmet-async';
import Popup from '../features/Popup';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Seo from '../widgets/Seo';


export default function App() {
  return (
    <HelmetProvider>
      <Seo title="century" description='Сайт для сельскохозяйственных услуг' canonical='' image='' schemaMarkup={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Your Site',
        url: 'https://yourdomain.com/',
      }} />
      <div className="App">
        <Header />
        <Content />
        <Popup />
        <Footer />
        
      </div>
    </HelmetProvider>
  );
}
