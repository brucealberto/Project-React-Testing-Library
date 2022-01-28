import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';

describe('Testar o componente "<NotFound/>"', () => {
  it('Teste se página contém um "h2" com o texto "Page requested not found"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Page requested/i,
    });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/Page requested not found/i);
  });

  it('Teste se página mostra a imagem ', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/teste');
    const image = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
