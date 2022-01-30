import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testar o Componente "<Pokemon.js />"', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonTitle = screen.getByText(/pikachu/i);
    expect(pokemonTitle).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toBeInTheDocument();

    const pokemonWeight = getByText('Average weight:', { name: '6.0' });
    expect(pokemonWeight).toBeInTheDocument();

    const pokemonImage = screen.getByAltText('Pikachu sprite');
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);
  });

  it('Teste o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    renderWithRouter(<App />);
  });

  it('Teste também se a URL exibida no navegador muda para "/pokemon/<id>"', () => {
    renderWithRouter(<App />);
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
  });
});
