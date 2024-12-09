import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto.tsx';
import CadastroCarrinho from './componentes/cadastroproduto/CadastroCarrinho.tsx';

// Definir todas as rotas em um único router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cadastro-produto",
    element: <CadastroProduto />,
  },
  {
    path: "/cadastro-carrinho",
    element: <CadastroCarrinho />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
