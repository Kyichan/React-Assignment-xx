import React, {Component} from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import Dishdetail from './components/DishdetailComponent';

import './App.css';
import {DISHES} from './shared/dishes';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render(){
    return (
      <div>
         <Navbar dark color = 'primary'>
            <div className="container">
                <NavbarBrand href="/">myApp</NavbarBrand>
            </div>
         </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );

  }
 
}

export default App;
