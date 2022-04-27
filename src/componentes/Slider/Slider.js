import React, { Component } from "react";

class Slider extends Component {
    render() {
        console.log(this.props)
        return (
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>
                {this.props.subTitle &&
                <a href="#" className="btn-white">{this.props.subTitle}</a>
                }
            </div>
        );
    }
}
export default Slider;