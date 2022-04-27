import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../footer/footer";
class Blog extends Component {
    render() {
        return (
            <div >
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <h1>Blog</h1>
                    </div>
                    <Sidebar 
                        blog="true"
                    />
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
        );
    }
}
export default Blog;