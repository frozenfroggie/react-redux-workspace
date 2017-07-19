import React from 'react';
import { connect } from "react-redux";
import '../../styles/index.scss';
import { sampleAction } from "../../redux/actions/sampleAction";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome from React & {this.props.sampleState.sampleInput} </h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
      sampleState: store.sample,
      secondState: store.second
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      sampleAction: (input) => dispatch(sampleAction(input))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
