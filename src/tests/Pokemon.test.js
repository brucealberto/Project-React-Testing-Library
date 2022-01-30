import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testar o Componente "<Pokemon.js />"', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const pokemonTitle = screen.getByTestId('pokemon-name');
    expect(pokemonTitle).toHaveTextContent(/pikachu/i);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/electric/i);

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/i);

    const pokemonImage = screen.getByAltText('Pikachu sprite');
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /More Details/i });
    expect(pokemonLink).toHaveAttribute('href', '/pokemons/25');
  });

  it('Teste o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /More Details/i });
    userEvent.click(pokemonLink);
    const pageLink = screen.getByRole('heading', { level: 2, name: /Summary/i });
    expect(pageLink).toBeInTheDocument();
  });

  it('Teste também se a URL exibida no navegador muda para "/pokemon/<id>"', () => {
    const { history } = renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /More Details/i });
    userEvent.click(pokemonLink);
    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /More Details/i });
    userEvent.click(pokemonLink);
    const pokemonFavorite = screen.getByRole('checkbox');
    userEvent.click(pokemonFavorite);
    const star = screen.getByRole('img', { name: /Pikachu is marked as favorite/i });
    expect(star).toBeInTheDocument();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
    expect(star).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
