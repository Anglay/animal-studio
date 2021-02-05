import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import './styles/index.less';

const { Content } = Layout

const CreatePage = props => {
    return <Content>
        CreatePage
    </Content>
}

export default connect()(CreatePage);
