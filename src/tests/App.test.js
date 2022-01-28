import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Testar o componente "<App.js />"', () => {
  it('Teste se o link "Home" existe e está funcionando', () => {
    const { history } = renderWithRouter(<App />);
    // se o link existe
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    // se a aplicação é redirecionad
    userEvent.click(homeLink);
    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/');
    const homeTitle = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Teste se o link "About" existe e está funcionando', () => {
    const { history } = renderWithRouter(<App />);
    // se o link existe
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    // se a aplicação é redirecionada
    userEvent.click(aboutLink);
    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/about');
    const aboutTitle = screen.getByRole('heading', {
      level: 2,
      name: /About Pokédex/i,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Teste se o link "Favorite pokémons" existe e está funcionando', () => {
    const { history } = renderWithRouter(<App />);
    // se o link existe
    const favoriteLink = screen.getByRole('link', {
      name: /Favorite pokémons/i,
    });
    expect(favoriteLink).toBeInTheDocument();
    // se a aplicação é redireciona
    userEvent.click(favoriteLink);
    const {
      location: { pathname },
    } = history;
    expect(pathname).toBe('/favorites');
    const favoriteTitle = screen.getByRole('heading', {
      level: 2,
      name: /Favorite pokémons/i,
    });
    expect(favoriteTitle).toBeInTheDocument();
  });

  it('Teste se a aplicação é redirecionada para a página "Not Found"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');
    const notFoundTitle = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });
});
