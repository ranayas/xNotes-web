import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('<Header />', () => {
  it('should render a logo', () => {
    render(<Header />);
    const logo = screen.getByText('xNotes');
    expect(logo).toBeInTheDocument();
  });
});
