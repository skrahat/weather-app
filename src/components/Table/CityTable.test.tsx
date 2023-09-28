import React from 'react';
import { render, screen } from '@testing-library/react';
import CityTable from './CityTable';

describe('CityTable Component', () => {
  it('renders the component with cities', () => {
    const cities = [
      { name: 'City1', lat: 123, lng: 456 },
      { name: 'City2', lat: 789, lng: 101 },
    ];

    render(<CityTable cities={cities} />);

    // Check if the component renders the city names and coordinates
    expect(screen.getByText('City1')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('456')).toBeInTheDocument();
    expect(screen.getByText('City2')).toBeInTheDocument();
    expect(screen.getByText('789')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
  });

  it('renders the component with an empty list of cities', () => {
    const cities: any[] = []; // Empty list

    render(<CityTable cities={cities} />);

    // Check if the component renders without any city data
    expect(screen.getByText('Top Cities in Canada')).toBeInTheDocument();
  });
});
