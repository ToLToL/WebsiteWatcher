import React, { Component } from "react";
import User from "../interfaces/User.interface";

export class WebsiteSearch extends Component<User> {

    constructor(props: User) {
        super(props);

        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onSearchClick = () => {
        console.log('Clicked!');
    }

  render() {
    const { name, numberOfPokemons } = this.props;
    return (
      <div>
        <p>
          User {name}{" "}
          {numberOfPokemons && <span>has {numberOfPokemons} pokemons</span>}
        </p>
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
      </div>
    );
  }
}

export default WebsiteSearch;
