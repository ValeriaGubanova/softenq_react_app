import React, {Component} from "react";

export default class Render extends Component {
  constructor() {
    super();
    this.state = {color: "red", count: 0, list: [{title: "Java"}, {title:"Pain"}] };
  }

    addElement() {
      console.log("add")
      this.state.list.push( {title:'Java Script'});
      this.renderlist();
    }

    removeElement() {
      console.log("remove");
      this.state.list.pop();
    }

    counter() {
      console.log("counter")
      return (
        <div
          onClick={() => {
            this.setState({count: this.state.count + 1});
          }}
          >
          <div>{this.state.count}</div>
          </div>
      );
    }
    renderListItem({item, index}){
      console.log("listItem");
      return <div key={`${item.title}`}>{item.title}</div>;
    }

    renderlist() {
      console.log("list")
      return this.state.list.map((item,index) => {
        return this.renderListItem({item, index});
      });
    }


    render() {
      console.log("render");
      return (
        <div>
        hi
        {this.counter()}
        {this.addElement()}
        {this.renderlist()}
        {this.removeElement()}
        </div>
      );
    }
}
