import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Card, Input, Select, Tree, TreeSelect, Button } from 'antd';
import {
    ImportOutlined,
  } from '@ant-design/icons';
import './styles/index.less';

const { Content } = Layout
const { Option } = Select
const { DirectoryTree } = Tree;
const { TreeNode } = TreeSelect;

const treeData = [
    {
      title: 'parent 0',
      key: '0-0',
      children: [
        { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
        { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
        { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
      ],
    },
];

const ImportPage = props => {
    console.log(props)
    const { app, dispatch } = props
    const { dirArr, projectDir } = app
    const onChangeProjectDir = value => {
        dispatch({
            type: 'app/changeProjectDir',
            payload: {
                projectDir: value
            }
        })
    }
    const Title = () => {
        return <div className="card-title">
            <Input.Group className="card-dir-input" compact>
                <Select value={projectDir} onChange={onChangeProjectDir}>
                    {dirArr.map(item => <Option value={item} key={item}>{item}</Option>)}
                </Select>
                <TreeSelect
                    className="card-dir-input-flex-1"
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                >
                    <TreeNode value="parent 1" title="parent 1">
                    <TreeNode value="parent 1-0" title="parent 1-0">
                        <TreeNode value="leaf1" title="my leaf" />
                        <TreeNode value="leaf2" title="your leaf" />
                    </TreeNode>
                    <TreeNode value="parent 1-1" title="parent 1-1">
                        <TreeNode value="sss" title="sss" />
                    </TreeNode>
                    </TreeNode>
                </TreeSelect>
            </Input.Group>
        </div>
    }

    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };
    
    const onExpand = () => {
        console.log('Trigger Expand');
    };
    return <Content className="import-page">
        <Card title={<Title/>} actions={[<Link to="/editer"><Button icon={<ImportOutlined />}>导入</Button></Link>]} className="import-content">
            <div className="card-content">
                <DirectoryTree
                    multiple
                    defaultExpandAll
                    onSelect={onSelect}
                    onExpand={onExpand}
                    treeData={treeData}
                />
            </div>
        </Card>
    </Content>
}

export default connect(({ app }) => ({ app }))(ImportPage);
