import React from 'react';
import { connect } from 'react-redux';
import { sampleAction } from '../actions/sampleActions';
import { sampleAsyncAction } from '../actions/sampleAsyncActions';

class Home extends React.Component {
  render() {
    return (
     <div className="App">
       <div className="App-header">
         <h2> Home </h2>
       </div>
       <div className="App-body">
         <button onClick={this.props.onButtonClick}>Async Action</button>
         {
           this.props.sampleState.loading ? <p> Loading... </p>:
           <div>
            <div dangerouslySetInnerHTML={{__html: this.props.sampleState.sampleInput[0] }}></div>
            <img src={this.props.sampleState.sampleInput[1]} />
          </div>
          }
       </div>
     </div>
     )
   }
 }

 const mapStateToProps = store => ({
     sampleState: store.sampleReducer,
     secondState: store.secondReducer
 });

 export default connect(mapStateToProps,{onButtonClick: sampleAsyncAction})(Home);
