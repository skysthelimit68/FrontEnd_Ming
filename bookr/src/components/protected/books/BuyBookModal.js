import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class BuyBookModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    convertISBN = isbn => {
        let total = 0;
       
        let result = isbn.substring(3, 12);
        for (let x = 0; x < 9; x += 1) {
          total = total + (result.charAt(x) * (10 - x));
        }
       
        let z = (11 - (total % 11)) % 11;
        if (z === 10) { z = "X"; }
       
        return result + z;
       }
       

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="buybook-modal">
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Buy Book       
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Select which vendor you would like to purchase this book from"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <div className="bookstore_logo">
                    <a href={`https://www.amazon.com/dp/product/${this.convertISBN(this.props.isbn.toString())}`} target="_blank">
                        <img src="https://pmcvariety.files.wordpress.com/2018/01/amazon-logo.jpg?w=700&h=393&crop=1"></img>
                    </a>
                    
                </div>
                <div className="bookstore_logo">
                    <a href={`https://www.barnesandnoble.com/w?ean=${this.props.isbn}#/`} target="_blank">
                        <img src="https://radioimg.s3.amazonaws.com/wdokfm/styles/delta__775x515/s3/barnes-and-noble-logo.png?YSgehDKHmKRdwoT4XywcYc0VWAPvesuY&itok=mJDcjSSM"></img>
                    </a>
                    
                </div>
                <p>All designated trademarks and brands are the property of their respective owners.</p>
            </DialogContentText>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default BuyBookModal;
