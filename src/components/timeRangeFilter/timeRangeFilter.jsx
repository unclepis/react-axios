import React from 'react'
import { Menu } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class TimeRangeFilter extends React.Component {
    timePriceValue(time, event) {
        if (this.props.getFilterData) {
            this.props.getFilterData({ time });
        }
    }

    render() {
        const timePeriod = ['Morning', 'Afternoon', 'Evening', 'Night'];
        return (
            <div>
                <Menu mode="inline" theme="light" defaultSelectedKeys={['0']} defaultOpenKeys={['user']}>
                    <SubMenu key="user" title={<span style={{ 'fontWeight': 'bold' }}>Price Range</span>}>
                        {
                            timePeriod.map((time, index) => {
                                return (
                                    <MenuItem key={index}><input type="radio" name="timeRange" onClick={this.timePriceValue.bind(this, time)} />
                                        {time}
                                    </MenuItem>
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

