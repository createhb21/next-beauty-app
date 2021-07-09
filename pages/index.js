import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Header } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState();

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 커넵</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  );
}
