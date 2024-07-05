import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Utiewalletrecord = () => {
  const columns = [
    { id: 'slNo', label: 'SL NO', minWidth: 100 },
    { id: 'userDetails', label: 'User Details', minWidth: 200 },
    { id: 'panDetails', label: 'PAN Details', minWidth: 150 },
    { id: 'contactDetails', label: 'Contact Details', minWidth: 150 },
    { id: 'address', label: 'Address', minWidth: 200 },
    { id: 'amount', label: 'Amount', minWidth: 100 },
    { id: 'ackDetails', label: 'ACK Details', minWidth: 150 },
    { id: 'prefill', label: 'PRE-FILL', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
  ];

  const rows = [
    { slNo: 1, userDetails: 'View Details', panDetails: 'PAN1234567', contactDetails: '9876543210', address: '123 Street, City', amount: '₹5000', ackDetails: 'ACK2023', prefill: 'Yes', status: 'Approved' },
    // Add more rows as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title */}
        <div className="bg-gray-200 px-4 py-2 rounded-t-lg mb-4">
          <h1 className="text-lg font-bold text-gray-800">UTI E-Wallet Record</h1>
        </div>

        {/* Show Entries and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex gap-6 items-center mb-2 sm:mb-0">
            <div>
              <TextField
                type="text"
                placeholder="06/15/2024"
                className="p-2 px-8"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <TextField
                type="text"
                placeholder="06/15/2024"
                className="p-2 px-8"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <TextField
                type="text"
                placeholder="ORDER Id/ADHAR/etc"
                className="p-2 px-8"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="search" className="mr-2 font-semibold">Search</label>
            <TextField
              type="text"
              id="search"
              name="search"
              className="px-2 py-1 border border-gray-300 rounded bg-gray-200"
              variant="outlined"
              size="small"
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="showEntries" className="mr-2 font-semibold">Show</label>
          <Select
            id="showEntries"
            name="showEntries"
            className="px-2 py-1 border border-gray-300 rounded bg-gray-200"
            variant="outlined"
            size="small"
            defaultValue="10"
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="50">50</MenuItem>
            <MenuItem value="100">100</MenuItem>
          </Select>
          <label htmlFor="showEntries" className="ml-2 font-semibold">entries</label>
        </div>

        {/* Table */}
        <Paper className="mb-8">
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                      {column.id === 'slNo' && <ChevronUpIcon className="h-4 w-4 text-gray-400 ml-1" />}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.slNo} hover>
                    {columns.map((column) => (
                      <TableCell key={column.id} align="center">
                        {row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

      </div>
    </div>
  );
};

export default Utiewalletrecord;
