import React from "react";
import "./shoppage.styles.scss";
import SHOP_DATA from "./082 shop.data";
import CollectioPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;

    return (
      <div>
        {collection.map(({ id, ...others }) => (
          <CollectioPreview key={id} {...others} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
