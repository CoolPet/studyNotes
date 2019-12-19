import React from "react"
import {
  Card,
  Tabs,
  message,
  Icon
} from "antd"

const { TabPane } = Tabs

class Tab extends React.Component{
  state = {
    panes: [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false }
    ],
    activeKey: "1",
    newTabIndex: 0
  }

  render(){
    const { activeKey, panes } = this.state
    return(
      <div>
        <Card title="Tab页签">
          <Tabs defaultActiveKey="1" onChange={(key) => this.openMessage(key)}>
            <TabPane tab="标签1" key="1">
              欢迎学习React课程
            </TabPane>
            <TabPane tab="标签2" disabled key="2"></TabPane>
            <TabPane tab="标签3" key="3">
              React是一门非常受欢迎的MV*框架
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图标页签">
          <Tabs defaultActiveKey="1" onChange={(key) => this.openMessage(key)}>
            <TabPane
              tab={
                <span>
                  <Icon type="plus" />
                  标签1
                </span>
              }
              key="1"
            >
              创建属于你的React项目
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="edit" />
                  标签2
                </span>
              }
              key="2"
            >
              尝试如何使用React进行修改
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="delete" />
                  标签3
                </span>
              }
              key="3"
            >
              删除它，就这么简单
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可关闭卡片式页签">
          <Tabs 
            activeKey={activeKey}
            type="editable-card"
            onEdit={this.addEdit}
            onChange={this.onChange}
          >
            {
              panes.map((item) => (
                <TabPane tab={item.title} key={item.key} closable={item.closable}>
                  {item.content}
                </TabPane>
              ))
            }
          </Tabs>
        </Card>
      </div>
    )
  }

  UNSAFE_componentWillMount(){
    const { panes } = this.state
    this.setState({
      newTabIndex: panes.length
    })
  }

  openMessage(key){
    message.info("嗨，您选择了页签：" + key)
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  addEdit = (targetKey, action) => {
    this[action](targetKey)
  }

  add = () => {
    const { panes, newTabIndex } = this.state
    const activeKey = (parseInt(newTabIndex) + 1).toString() 
    panes.push({ title: 'Tab' + activeKey, content: 'Content of Tab' + activeKey, key: activeKey })
    this.setState({ 
      panes, 
      activeKey,
      newTabIndex: activeKey
    })
  }

  remove = (targetKey) => {
    const { panes } = this.state
    panes.splice(targetKey - 1, 1)
    this.setState({ 
      panes,
      activeKey: (targetKey-1).toString()
    })
  }
}

export default Tab