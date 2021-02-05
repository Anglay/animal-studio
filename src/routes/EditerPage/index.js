import React from 'react';
import { connect } from 'dva';
import { Layout, Card } from 'antd';
import './styles/index.less';

const { Content } = Layout

const EditerPage = props => {
    return <Content className="editer-page">
        <div className="project-content">
            <Card title="工程">
            </Card>
        </div>
        <div className="workbench-content"></div>
        <div className="components-content">
            <Card title="组件库">
            </Card>
        </div>
    </Content>
}

export default connect()(EditerPage);
