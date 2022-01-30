import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Teste o Componente "<Pokedex.js />"', () => {
  it('Teste se página contém um heading h2 com o texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);
    const pokeTitle = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(pokeTitle).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando utilizado o botão', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(button).toHaveClass('button-text');

    const pokemon = screen.getByTestId('pokemon-name');
    expect(pokemon).toHaveTextContent(/Charmander/i);
  });

  it('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const pokemonCard = screen.getAllByRole('link', { name: /more details/i });
    expect(pokemonCard).toHaveLength(1);
  });

  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const total = 7;
    const filterButton = screen.getAllByTestId('pokemon-type-button');
    expect(filterButton).toHaveLength(total);
    expect(filterButton[0]).toHaveTextContent(/electric/i);
  });

  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /All/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(button).toHaveClass('button-text');
  });
});
