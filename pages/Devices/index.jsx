import { Delete, Edit, MoreHoriz } from '@mui/icons-material';
import { Box, Button, IconButton, Menu, MenuItem, Modal, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
function createData(name, authToken, deviceOwner, status, id) {
  return { name, authToken, deviceOwner, status, id };
}

const rows = [
  createData('Device 1', "sdfdgdgfdgfdgfdgfdgfdgfd","schattaraj200@gmail.com", "Off"),
];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const paginationModel = { page: 0, pageSize: 5 };
const Devices = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
console.log("Rows",Object(rows));
  },[])
  return (
    <>
    <div className="main-content">
        <div className="top">
            <h4 className="heading">Devices</h4>
            <button className='btn btn-primary' onClick={handleOpen}><i data-feather="plus"></i>New Device</button>
        </div>
        <div className="table-area">
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
         
            <TableCell>Name</TableCell>
            <TableCell align="right">Auth Token</TableCell>
            <TableCell align="right">Device Owner</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.authToken}</TableCell>
              <TableCell align="right">{row.deviceOwner}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button className='btn btn-primary'
                id="basic-button"
                aria-controls={openMenu ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                onClick={handleClick}
                ><MoreHoriz/>
                </Button>
              <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleCloseMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              >
        <MenuItem onClick={handleCloseMenu}><Edit className='me-2'/>Rename</MenuItem>
        <MenuItem onClick={handleCloseMenu}><Delete className='me-2'/>Delete</MenuItem>
              </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      <h3>New Device</h3>
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 1,mb:1 }}>
      Create new device by filling in the form below
    </Typography>
    <TextField
      id="outlined-basic"
      label="Template Name"
      variant="outlined"
      fullWidth
      sx={{ mb: 2 }} // Margin bottom for spacing
    />
    <TextField
      id="outlined-basic2"
      label="Device Name"
      variant="outlined"
      fullWidth
      sx={{ mb: 2 }} // Margin bottom for spacing
    />
    <button
      variant="contained"
      color="primary"
      onClick={()=>{}} // Replace with your submit handler
      fullWidth
      className='btn btn-primary'
    >
      Submit
    </button>
  </Box>
</Modal>

    </>
  )
}

export default Devices