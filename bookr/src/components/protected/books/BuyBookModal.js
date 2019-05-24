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
                    <a href={`https://www.amazon.com/s?k=${this.props.isbn}`} target="_blank">
                        <img src="https://pmcvariety.files.wordpress.com/2018/01/amazon-logo.jpg?w=700&h=393&crop=1"></img>
                    </a>
                </div>
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
