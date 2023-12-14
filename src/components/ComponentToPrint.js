import * as React from "react";

// import image from "../../test_image.png";
import "./componentStyles/PrintComponentStyles.css";

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    // this.commodityList = props.commodityList;
    this.list = this.props.commodityList;
    this.state = { checked: false };
  }

  canvasEl;

  componentDidMount() {
    // const ctx = this.canvasEl.getContext("2d");
    // if (false) {
    //   ctx.beginPath();
    //   ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    //   ctx.stroke();
    //   ctx.fillStyle = "rgb(200, 0, 0)";
    //   ctx.fillRect(85, 40, 20, 20);
    //   ctx.save();
    // }
  }

  handleCheckboxOnChange = () =>
    this.setState({ checked: !this.state.checked });

  // setRef = (ref) => (this.canvasEl = ref);

  render() {
    // const { text } = this.props;
    console.log(this.props.commodityList);

    return (
      <div className="ticket hidden">
        {/* <img src="./logo.png" alt="Logo" /> */}
        <p className="centered">
          FOODELICIOUS
          <br />
          80 EAST STREET
          <br />
          BEDMINSTER, BS3 4EY
          <br />
          TEL: 01170000000
          <br />
          VAT NO: ________
        </p>
        <table>
          <thead>
            <tr>
              <th className="quantity">Q.</th>
              <th className="description">Description</th>
              <th className="price">$$</th>
            </tr>
          </thead>
          <tbody>
            {this.props.commodityList?.map((li) => {
              return (
                <tr className="commodity-row">
                  <td className="quantity">{li.unit}.00</td>
                  <td className="description">
                    {li.name}
                    {li.options?.map((opt) => {
                      return (
                        <>
                          <br /> - {opt.shortName}: {opt.type} [${opt.price}]
                        </>
                      );
                    })}

                    {/* <br /> - Size: 10" [$8.49] <br /> - Double
                Cheese: Yes [$1.49] <br /> - Sauce Dip: Hot Chilli [$0] */}
                  </td>
                  <td className="price">${li.productPrice}</td>
                </tr>
              );
            })}
            {/* <tr className="commodity-row">
              <td className="quantity">2.00</td>
              <td className="description">JAVASCRIPT BOOK</td>
              <td className="price">$10.00</td>
            </tr>
            <tr className="commodity-row">
              <td className="quantity">1.00</td>
              <td className="description">STICKER PACK</td>
              <td className="price">$10.00</td>
            </tr>
            <tr className="commodity-row">
              <td className="quantity" />
              <td className="description">TOTAL</td>
              <td className="price">$55.00</td>
            </tr> */}
          </tbody>
        </table>
        <p className="centered">
          Thanks for your order!
          <br />
          Order online for exclusive prices & discounts.
          <br />
          www.foodeliciousbristol.co.uk
        </p>
      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} text={props.text} />;
});
