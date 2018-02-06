import React from 'react'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class PriceRangeFilter extends React.Component {
    pickPriceValue(index) {
        if (this.props.getFilterData) {
            this.props.getFilterData(this._getLowAndHighPrice(index));
        }
    }

    _getLowAndHighPrice(index) {
        var lowPrice, highPrice;
        switch (index) {
            case 0:
                lowPrice = 0;
                highPrice = 100;
                break;
            case 1:
                lowPrice = 100;
                highPrice = 200;
                break;
            case 2:
                lowPrice = 200;
                highPrice = 300;
                break;
            case 3:
                lowPrice = 300;
                highPrice = 400;
                break;
            case 4:
                lowPrice = 500;
                highPrice = Infinity;
                break;
            default:
                break;
        }
        return { lowPrice, highPrice }
    }

    render() {
        const priceRange = ['0-100', '100-200', '200-300', '300-400', '500+'];
        return (
            <div>
                <Menu mode="inline" theme="light" defaultSelectedKeys={['0']} defaultOpenKeys={['user']}>
                    <SubMenu key="user" title={<span style={{ 'fontWeight': 'bold' }}>Price Range</span>}>
                        {
                            priceRange.map((price, index) => {
                                return (
                                    <MenuItem key={index}><input type="radio" name="priceRange" onClick={this.pickPriceValue.bind(this, index)} />{price}</MenuItem>
                                );
                            })
                        }
                    </SubMenu>
                </Menu>
                <hr style={{ width: '80%', margin: '0 auto' }} />
            </div>
        );
    }
}

