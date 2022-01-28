import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import { About } from '../components';

describe('Testar o Componente "<About.js />"', () => {
  it('Teste se a página contém um heading "h2" com o texto "About Pokédex" ', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const paragraphs = screen.getAllByText(/Pokémons/i);
    expect(paragraphs).toHaveLength(2);
  });

  it('Teste se a página contém uma imagem', () => {
    renderWithRouter(<About />);
    const image = screen.getByAltText(/Pokédex/i);
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(image).toHaveAttribute('alt', 'Pokédex');
  });
});
