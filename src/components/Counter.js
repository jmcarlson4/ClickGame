import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
      };

      handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
          <div className="card text-center">
            <div className="card-header bg-primary text-white">
              Counter
            </div>
            </div>
    )
    }
    };


    export default Counter;