import React, { Component } from "react";
import Slider from "../Slider/Slider";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../footer/footer";
import axios from "axios";

class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: {},
            status: null
        }
    }
    
    render() {

        axios.get("http://localhost:3900/api/articles")
            .then(res => {
                console.log(res.data)
                this.setState({
                    articles: res.data,
                    status: 'success'
                })
            }, err => {
                console.log(err)

            })
        return (
            <div >
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {/* {
                            this.state.status === "success" &&
                            <div>
                                {
                                    this.state.articles.map((article, i) => {
                                        return (<p key={i}>{article.title}</p>);
                                    })
                                }
                            </div>
                        } */}

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