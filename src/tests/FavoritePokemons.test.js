import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import { FavoritePokemons } from '../components';

describe('Testar Componente "<FavoritePokemons.js />"', () => {
  it('Teste se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const msgTitle = screen.getByText(/No favorite pokemon found/i);
    expect(msgTitle).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados', () => {
    renderWithRouter(<FavoritePokemons />);
    const pokemonCard = screen.getAllByText(/Pokemon/i);
    expect(pokemonCard).toHaveLength(1);
  });
});
