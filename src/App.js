import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import axios from 'axios';
import _ from 'lodash';
import { HeaderPanel } from './components/header/header';
import PriceRangeFilter from './components/priceRangeFilter/priceRangeFilter';
import TimeRangeFilter from './components/timeRangeFilter/timeRangeFilter';
import { MainSection } from './components/mainSection/mainSection';
import ResetButton from './components/resetButton/resetButton';

const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {},
      lowPrice: 0,
      time: 'all',
      highPrice: Infinity,
      collections: [],
      isReset: false
    };
    this.getFilter = this.getFilter.bind(this)
  }

  componentWillMount() {
    axios.get('/api/header').then(res => {
      console.log(res.data[0]);
      this.setState({
        header: res.data[0]
      });
    }).catch(error => {
      console.log(error);
    });;

    axios.get('/api/collections', {
      params: {
        priceLow: this.state.lowPrice,
        priceHigh: this.state.highPrice,
        time: this.state.time
      }
    }).then(res => {
      this.setState({
        collections: res.data
      });
    }).catch(error => {
      console.log(error);
    });;
  }

  getFilter(filter) {
    const { lowPrice, highPrice, time } = _.merge({}, this.state, filter);
    axios.get('api/collections', {
      params: {
        priceLow: lowPrice,
        priceHigh: highPrice,
        time: time
      }
    }).then(res => {
      this.setState({
        lowPrice: lowPrice,
        highPrice: highPrice,
        time: time,
        collections: res.data
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className='container'>
        <Layout>
          <Header>
            <HeaderPanel header={this.state.header} />
          </Header>

          <Layout style={{ display: 'flex' }}>
            <Sider>
              <ResetButton getFilterData={this.getFilter} />
              <PriceRangeFilter getFilterData={this.getFilter} />
              <TimeRangeFilter getFilterData={this.getFilter} />
            </Sider>
            <Content style={{ width: '100%', display: 'flex', flexFlow: 'row wrap' }}>
              <MainSection content={this.state.collections} />
            </Content>
          </Layout>

          <Footer>
            <FooterMsg />
          </Footer>
        </Layout>
      </div>
    );
  }
}

const FooterMsg = () => <p style={{ backgroundColor: '#ccc', color: '#fff', width: '100%', textAlign: 'center', margin: '2px auto' }}>@Copyright 2008-2018 Mr Uncle Pis Coorperate Company</p>




