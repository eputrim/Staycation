import React, { Component } from "react";

import Header from "parts/Header";
import PageDetails from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <PageDetails breadcrumb={breadcrumb} data={ItemDetails}></PageDetails>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
      </>
    );
  }
}
