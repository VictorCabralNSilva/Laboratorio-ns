import './App.css'
import React, {Suspense} from 'react'
const Header = React.lazy(() => import('./containers/layout/Header/Header').then(module => ({ default: module.Header })));
const Inicio = React.lazy(() => import('./containers/layout/Inicio/Inicio').then(module => ({ default: module.Inicio })));
const Servicos = React.lazy(() => import('./containers/layout/Servicos/Servicos').then(module => ({ default: module.Servicos })));
const Tecnologias = React.lazy(() => import('./containers/layout/Tecnologias/Tecnologias').then(module => ({ default: module.Tecnologias })));
const QuemSomos = React.lazy(() => import('./containers/layout/QuemSomos/QuemSomos').then(module => ({ default: module.QuemSomos })));
const Footer = React.lazy(() => import('./containers/layout/Footer/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <>
    <Suspense fallback={<div>Carregando....</div>}>
      <Header />
      <div id='body'>
        <main id='main'>
          <Inicio />
          <Servicos />
          <Tecnologias />
          <QuemSomos />
        </main>
      </div>
      <Footer />
    </Suspense>  
    </>
  )
}
export default App