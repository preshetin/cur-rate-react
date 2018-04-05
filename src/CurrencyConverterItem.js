import React from 'react';
import openSocket from 'socket.io-client';
import CCC from './ccc-streamer-utilities';




class CurrencyConverterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    }
  }

  componentDidMount() {
    const  socket = openSocket('https://streamer.cryptocompare.com/');
    var subscription = [`5~CCCAGG~${this.props.from}~${this.props.to}`];

    socket.emit('SubAdd', { subs: subscription });
  	socket.on("m", function(message) {
      var messageType = message.substring(0, message.indexOf("~"));
      		var res = {};
      		if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
      			res = CCC.CURRENT.unpack(message);

            if (res.PRICE) {
              this.setState({
                price: res.PRICE
              });
            }
            console.log(res.PRICE);
      		}
  	}.bind(this));

  }

  componentWillUnmount() {}

  render() {
    return <h1>{this.props.from} - {this.props.to}  {this.state.price}</h1>;
  }
}

export default CurrencyConverterItem;
