import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import './CityTable.css';

type City = {
  name: string;
  lat: number;
  lng: number;
};

type CityTableProps = {
  cities: City[];
};

const CityTable: React.FC<CityTableProps> = ({ cities }) => {
  return (
    <div>
      <h2>Top Cities in Canada</h2>
      <TableContainer component={Paper} className="city-table-container">
        <Table>
          <TableHead className="city-table-header">
            <TableRow>
              <TableCell className="city-table-header-cell">City</TableCell>
              <TableCell className="city-table-header-cell">Latitude</TableCell>
              <TableCell className="city-table-header-cell">
                Longitude
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="city-table-body">
            {cities.map((city, index) => (
              <TableRow key={index} className="city-table-row">
                <TableCell>{city.name}</TableCell>
                <TableCell>{city.lat}</TableCell>
                <TableCell>{city.lng}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CityTable;
