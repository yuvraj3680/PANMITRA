import React from 'react';
import { ChevronUpIcon } from "@heroicons/react/solid";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Nsdlpanhistory = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="bg-gray-200 px-4 py-2 rounded-t-lg mb-4">
          <h1 className="text-lg font-bold text-gray-800">
            NSDL e-KYC PAN History
          </h1>
        </div>

        {/* Show Entries and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex gap-6 items-center mb-2 sm:mb-0">
            <div>
              <TextField
                type="date"
                placeholder="06/15/2024"
                className="p-2 px-8"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <TextField
                type="date"
                placeholder="06/15/2024"
                className="p-2 px-8"
                variant="outlined"
                size="small"
              />
            </div>
            <div>
              <TextField
                type="text"
                placeholder="ORDER Id/Ack Number / Etc"
                className="p-2 px-8"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="search" className="mr-2 font-semibold">
              Search
            </label>
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
          <label htmlFor="showEntries" className="mr-2 font-semibold">
            Show
          </label>
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
          <label htmlFor="showEntries" className="ml-2 font-semibold">
            entries
          </label>
        </div>

        {/* Table */}
        <Paper className="mb-8">
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell className="px-4 py-2 flex items-center cursor-pointer">
                    <span className="mr-1">SL NO</span>
                    <ChevronUpIcon className="h-4 w-4 text-gray-400" />
                  </TableCell>
                  <TableCell className="px-4 py-2">ORDER ID</TableCell>
                  <TableCell className="px-4 py-2">User Details</TableCell>
                  <TableCell className="px-4 py-2">APPLICATION</TableCell>
                  <TableCell className="px-4 py-2">ACK DETAILS</TableCell>
                  <TableCell className="px-4 py-2">BALANCE</TableCell>
                  <TableCell className="px-4 py-2">STATUS</TableCell>
                  <TableCell className="px-4 py-2">REUPDATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Sample row */}
                <TableRow hover>
                  <TableCell className="px-4 py-3">1</TableCell>
                  <TableCell className="px-4 py-3">View Details</TableCell>
                  <TableCell className="px-4 py-3">PAN1234567</TableCell>
                  <TableCell className="px-4 py-3">9876543210</TableCell>
                  <TableCell className="px-4 py-3">123 Street, City</TableCell>
                  <TableCell className="px-4 py-3">₹5000</TableCell>
                  <TableCell className="px-4 py-3">ACK2023</TableCell>
                  <TableCell className="px-4 py-3">Approved</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default Nsdlpanhistory;
