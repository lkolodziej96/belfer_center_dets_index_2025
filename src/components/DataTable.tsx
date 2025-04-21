import React, { useState } from 'react';
import type { CountryData, ViewState } from '../types';
import { calculateColorIntensity } from '../utils/dataProcessing';
import { sectorColors, viewBaseColors } from '../utils/constants';

interface Column {
  key: string;
  name: string;
}

interface Props {
  data: CountryData[];
  columns: Column[];
  viewState: ViewState;
  selectedSector: string | null;
  selectedCountry: string | null;
  handleSort: (key: string) => void;
}

const DataTable: React.FC<Props> = ({ 
  data, 
  columns, 
  viewState,
  selectedSector,
  selectedCountry,
  handleSort 
}) => {
  const [sortField, setSortField] = useState<string>('totalScore');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleHeaderClick = (field: string) => {
    if (field === sortField) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
    handleSort(field);
  };

  const sortedData = React.useMemo(() => {
    return [...data].sort((a, b) => {
      let aValue = 0, bValue = 0;

      if (sortField === 'country') {
        aValue = a.country;
        bValue = b.country;
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (viewState.type === 'sector' && viewState.sector) {
        aValue = a.sectorDetails?.[viewState.sector]?.[sortField] ?? 0;
        bValue = b.sectorDetails?.[viewState.sector]?.[sortField] ?? 0;
      } else {
        if (sortField === 'totalScore') {
          aValue = a.totalScore ?? 0;
          bValue = b.totalScore ?? 0;
        } else {
          aValue = a.sectorScores?.[sortField] ?? 0;
          bValue = b.sectorScores?.[sortField] ?? 0;
        }
      }

      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    });
  }, [data, sortField, sortDirection, viewState]);

  const maxScores = React.useMemo(() => {
    if (viewState.type === 'sector' && viewState.sector) {
      return {
        ...Object.fromEntries(
          columns.map(col => [
            col.key,
            Math.max(...data.map(d => d.sectorDetails?.[viewState.sector]?.[col.key] ?? 0))
          ])
        ),
        totalScore: Math.max(...data.map(d => {
          const sectorData = d.sectorDetails?.[viewState.sector] ?? {};
          return Object.values(sectorData).reduce((sum, val) => sum + (val ?? 0), 0);
        }))
      };
    }

    return {
      totalScore: Math.max(...data.map(d => d.totalScore ?? 0)),
      ...Object.fromEntries(
        columns.map(col => [
          col.key,
          Math.max(...data.map(d => d.sectorScores?.[col.key] ?? 0))
        ])
      )
    };
  }, [data, columns, viewState]);

  const getHeaderColor = () => {
    if (viewState.type === 'sector' && viewState.sector) {
      return viewBaseColors[viewState.sector];
    }
    return viewBaseColors.main;
  };

  return (
    <div className="overflow-hidden">
      <table className="w-full divide-y divide-gray-200 table-fixed">
        <thead style={{ backgroundColor: getHeaderColor() }}>
          <tr>
            <th 
              className="w-[15%] px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:opacity-80"
              onClick={() => handleHeaderClick('country')}
            >
              <div className="truncate">
                Country
                {sortField === 'country' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
            {columns.map(({ key, name }) => (
              <th 
                key={key}
                className={`w-[7.5%] px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:opacity-80 ${
                  selectedSector && selectedSector !== key ? 'opacity-50' : ''
                }`}
                onClick={() => handleHeaderClick(key)}
              >
                <div className="h-12 flex items-center">
                  <span className="line-clamp-2 text-[11px]">
                    {name}
                    {sortField === key && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </span>
                </div>
              </th>
            ))}
            <th 
              className="w-[7.5%] px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider cursor-pointer hover:opacity-80"
              onClick={() => handleHeaderClick('totalScore')}
            >
              <div className="truncate">
                Total
                {sortField === 'totalScore' && (
                  <span className="ml-1">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((country) => {
            const total = viewState.type === 'sector' && viewState.sector
              ? Object.values(country.sectorDetails?.[viewState.sector] ?? {}).reduce((sum, val) => sum + (val ?? 0), 0)
              : country.totalScore ?? 0;

            return (
              <tr 
                key={country.country}
                className={`hover:bg-gray-50 ${
                  selectedCountry === country.country ? 'bg-blue-50' : ''
                }`}
              >
                <td className="px-2 py-2 text-sm font-medium text-gray-900 truncate">
                  {country.country}
                </td>
                {columns.map(({ key }) => {
                  const score = viewState.type === 'sector' && viewState.sector
                    ? country.sectorDetails?.[viewState.sector]?.[key] ?? 0
                    : country.sectorScores?.[key] ?? 0;

                  return (
                    <td 
                      key={key}
                      className={`px-2 py-2 text-sm font-semibold text-center ${
                        selectedSector && selectedSector !== key ? 'opacity-50' : ''
                      }`}
                      style={{
                        backgroundColor: calculateColorIntensity(
                          score,
                          maxScores[key],
                          viewState.type,
                          viewState.sector
                        ),
                        color: score > maxScores[key] * 0.5 ? 'white' : '#1a202c'
                      }}
                    >
                      {score.toFixed(3)}
                    </td>
                  );
                })}
                <td 
                  className="px-2 py-2 text-sm font-semibold text-center"
                  style={{
                    backgroundColor: calculateColorIntensity(
                      total,
                      maxScores.totalScore,
                      viewState.type,
                      viewState.sector
                    ),
                    color: total > maxScores.totalScore * 0.5 ? 'white' : '#1a202c'
                  }}
                >
                  {total.toFixed(3)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;