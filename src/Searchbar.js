import React from "react";



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { Topic: "" };
  }

  handleChange = event => {
    this.setState({ Topic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.Topic);
  };

  render() {
    return (
      <div>
            
              <form onSubmit={this.handleSubmit}>
              <input  className ="searchbar"
                 autoFocus
                  value={this.state.Topic}
                 onChange={this.handleChange}/>
                <button>Search</button>
              </form>
            
      </div>
    );
  }
}

export default SearchBar;