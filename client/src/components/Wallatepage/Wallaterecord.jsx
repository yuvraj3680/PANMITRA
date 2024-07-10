import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const columns = [
  { id: 'orderId', label: 'ORDERID', minWidth: 100 },
  { id: 'username', label: 'Username', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'aadhaar', label: 'AADHAAR', minWidth: 100 },
  // { id: 'dob', label: 'DOB', minWidth: 100 },
  { id: 'pan', label: 'PAN', minWidth: 100 },
  { id: 'charges', label: 'Charges', minWidth: 100 },
  // { id: 'remark', label: 'REMARK', minWidth: 100 },
  // { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'amount', label: 'Amount', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 100 },
];

const Wallaterecord = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [userId, setUserId] = useState(null); 

  useEffect(() => {
    fetchTransactions();
    fetchUserInfo();
  }, []);

  const fetchTransactions = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (userId) {
        setUserId(userId); // Set userId from localStorage
      } else {
        console.log('User ID not found in localStorage');
      }

      // const userDetails = JSON.parse(userDetailsString);
      // const ser = userDetails?.id;
      // if (!userId) {
      //   console.log('User ID not found in UserDetails');
      //   return;
      // }

      const response = await axios.get(`http://localhost:8000/wallet/${userId}/transactions`);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchUserInfo = () => {
    const userDetailsString = localStorage.getItem('UserDetails');
    if (!userDetailsString) {
      console.log('UserDetails not found in localStorage');
      return;
    }

    const userDetails = JSON.parse(userDetailsString);
    setUserInfo(userDetails);
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (searchQuery !== '' && !transaction.type.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (startDate !== '' && endDate !== '') {
      const transactionDate = new Date(transaction.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (transactionDate < start || transactionDate > end) {
        return false;
      }
    }
    return true;
  });

  const generateRandomOrderId = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = () => {
    console.log('Search query:', searchQuery);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Wallet Record</h2>
        <div className="flex space-x-2">
          <TextField
            type="text"
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <TextField
            type="date"
            label="Start Date"
            variant="outlined"
            size="small"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="date"
            label="End Date"
            variant="outlined"
            size="small"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <Paper className="w-full overflow-hidden">
        <TableContainer style={{ maxHeight: 400 }}>
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
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="center">{generateRandomOrderId()}</TableCell>
                    <TableCell align="center">{userInfo.username}</TableCell>
                    <TableCell align="center">{userInfo.name}</TableCell>
                    <TableCell align="center">{userInfo.aadhar}</TableCell>
                    {/* <TableCell align="center">{userInfo.dob}</TableCell> */}
                    <TableCell align="center">{userInfo.pan}</TableCell>
                    <TableCell align="center">
                      {transaction.charges.map(charge => (
                        <div key={charge.id}>
                            {charge.description}
                        </div>
                      ))}
                    </TableCell>
                    {/* <TableCell align="center">{transaction.remark}</TableCell> */}
                    {/* <TableCell align="center">{transaction.status}</TableCell> */}
                    <TableCell align="center">{transaction.amount}</TableCell>
                    <TableCell align="center">{transaction.type}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredTransactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default Wallaterecord;
