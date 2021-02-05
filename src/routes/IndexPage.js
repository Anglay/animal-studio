import React from 'react';
import { connect } from 'dva';
import { Layout, Card, Tabs } from 'antd';
import './IndexPage.less';

function IndexPage() {
  return (
    <Layout>
      <Card title="Default size card">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
