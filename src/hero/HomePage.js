import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import { Image } from 'antd';
import { Link } from "react-router-dom";
import MyHeader from "../components/MyHeader";

const { Title } = Typography;

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
export default function HomePage() {
    return (
            <Content>
                <Row justify="center" align="top">
                    <Col span={12}>
                        <Title level={2} style={{ textAlign: 'center' }}>Better clothing for planet</Title>
                        <Title level={5} style={{ textAlign: 'center' }}>When we think of pollution, we think of big oil companies and smog from coal mines—but the truth is, the fast fashion industry is one of the central polluting industries in the world. Not only is clothing production harmful to our planet, but the process also kills thousands of farmers and producers each year due to chemicals and waste.</Title>
                        <Image
                            width={'100%'}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                </Row>
            </Content>
        
    )
}