import React from 'react';
import ReactDOM from 'react-dom';
import './cart.css';
import 'antd/dist/antd.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

import shopIcon from "./../Pic/shopIcon.png"


export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
        this.handleChange = this.handleChange.bind(this)
        this.createData = this.createData.bind(this)
    }

    handleChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
   };

   jump(e) {
       window.location.href = '/'
   }

   createData(product, subtotal) {
       return { product, subtotal };
   }



   render() {
      var React = require('react');
      var QRCode = require('qrcode.react');
      const useStyles = makeStyles({
          table: {
            minWidth: 650,
          },
      });

      const rows = [
          this.createData('Purple Cap', "$30.00"),
          this.createData('Green Cap', "$0.01"),
        ];
      return (
        <body id='container1'>
        <div id="header">
            <img class='shopIcon' src={shopIcon}/>
            <h2 id="headContent1">FASHION SHOP</h2>
            <h4 id="headContent2">MAN</h4>
            <h4 id="headContent3">WOMEN</h4>
            <h4 id="headContent3">KID</h4>
            <h4 id="headContent3">SALE</h4>
        </div>
        <div id="banner1">
            <h1 id="content"> CHECKOUT</h1>
        </div>
        <hr className="hr1"/>

        <div id="container4">
              <h1>Billing Details</h1>
              <TextField required id="standard-required" label="Name" /> <span>&nbsp;&nbsp;</span>
              <TextField
                id="standard-password-input"
                label="Address"
                type="password"
                autoComplete="current-password"
              />
              <br/>
              <br/>
              <TextField
                id="standard-number"
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              /><span>&nbsp;&nbsp;</span>
              <TextField id="standard-search" label="Email" type="search" />
              <br/>
              <br/>
              <TextField required id="standard-required" label="Company name"/>
              <br/>
              <br/>
              <br/>
              <br/>
              <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={6}
                  label="Additional information"
                  helperText="Type your Additional requirement"
                  defaultValue="Say something"
                  variant="outlined"
                />
              <br/>
              <br/>
            <div id='box2'><Button variant="contained" color="secondary" htmlType="back" htmlType="back" onClick={this.jump.bind(this)}>
              Go Back
            </Button>
            </div>
        </div>

        <div id="container3">
        <h1>Your Order</h1>
        <br/>
        <br/>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.product}>
                  <TableCell component="th" scope="row">
                    {row.product}
                  </TableCell>
                  <TableCell align="right">{row.subtotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <RadioGroup aria-label="gender" name="gender1" value={this.state.value} onChange={this.handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Cash on delivery" />
          <FormControlLabel value="male" control={<Radio />} label="Alipay, WeChat Pay and UnionPay" />
          <FormControlLabel value="other" control={<Radio />} label="PayPal" />
        </RadioGroup>
        <br/>
        <br/>
        <QRCode value="http://facebook.github.io/react/" />
        </div>


        </body>
        )
    };

}

export default Cart
