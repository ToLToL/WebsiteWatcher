import React, { Component } from "react";
import axios from "axios";
import User from "../interfaces/User.interface";

export class WebsiteSearch extends Component<User> {

    constructor(props: User) {
        super(props);

        this.onSearchClick = this.onSearchClick.bind(this);
    }

    onSearchClick = () => {
        axios.get('http://localhost:4000?url1=yahoo.com')
            .then(res => {
                console.log(res.data);
            })
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
        <input type="text"/>
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>
      </div>
    );
  }
}

export default WebsiteSearch;