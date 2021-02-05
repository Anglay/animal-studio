import React from 'react';
import { connect,  } from 'dva';
import { Link } from 'dva/router';
import { Row, Col, Layout } from 'antd';
import {
    ImportOutlined,
    PlusSquareOutlined,
  } from '@ant-design/icons';
import './styles/index.less';

const { Content } = Layout

const EntryPage = props => {
    return <Content className="entry-content">
        <Row gutter={20}>
            <Col span={12}><Link to="/import"><div className="entry-item"><ImportOutlined />导入项目</div></Link></Col>
            <Col span={12}><Link to="/create"><div className="entry-item"><PlusSquareOutlined />新建项目</div></Link></Col>
        </Row>
    </Content>
}

export default connect()(EntryPage);
