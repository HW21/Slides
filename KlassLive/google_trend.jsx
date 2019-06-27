import React from "react";
import ReactDOM from "react-dom";
import Helmet from 'react-helmet';


export default class GoogleTrend extends React.Component {
    clear() {
        var iframes = document.querySelectorAll("iframe");
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
    }
    componentDidMount = async () => {
        // this.clear();
        let script = document.createElement("script");
        script.src = "https://ssl.gstatic.com/trends_nrtr/1845_RC03/embed_loader.js";
        script.async = true;
        let chartsDiv = ReactDOM.findDOMNode(this.refs.charts)
        chartsDiv.appendChild(script);
        script.onload = () => {
            trends.embed.renderExploreWidgetTo(
                chartsDiv,
                "TIMESERIES",
                {
                    "comparisonItem": [{
                        "keyword": this.props.word,
                        "geo": "",
                        "time": "2004-01-01 2019-06-24"
                    }],
                    "category": 0,
                    "property": ""
                },
                {
                    "exploreQuery": `date=all&q=${this.props.word}&w=1000&h=600`,
                    "guestPath": "https://trends.google.com:443/trends/embed/"
                });
        };
    }
    render() {
        return <React.Fragment>
            <Helmet>
                <script type="text/javascript"
                    src="https://ssl.gstatic.com/trends_nrtr/1845_RC03/embed_loader.js">
                </script>
            </Helmet>
            <div ref="charts" />
        </React.Fragment>;
    }
}
