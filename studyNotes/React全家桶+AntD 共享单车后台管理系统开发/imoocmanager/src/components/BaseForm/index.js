import React from "react"
import { 
  Input,
  Form,
  Button,
  Checkbox,
  Select,
  DatePicker
} from "antd"
import Utils from "../../utils/util"

const FormItem = Form.Item
const Option = Select.Option

class FilterForm extends React.Component{
  render(){
    return(
      <Form layout="inline">
        {this.initFormList()}
        <FormItem>
          <Button 
            type="primary" 
            style={{marginBottom: 0}}
            onClick={this.handleSearch}
          >
            查询
          </Button>
          <Button 
            style={{marginBottom: 0}}
            onClick={this.reset}
          >
            重置
          </Button>
        </FormItem>
      </Form>
    )
  }

  initFormList = () => {
    const { getFieldDecorator } = this.props.form
    const formList = this.props.formList
    const formItemList = []
    if(formList && formList.length>0){
      formList.forEach((item, i) => {
        let label = item.label
        let field = item.field
        let initialValue = item.initialValue || ""
        let placeHolder = item.placeholder
        let width = item.width
        if (item.type === '时间查询'){
          const begin_time = <FormItem label="订单时间" key="start_time">
            {
              getFieldDecorator('begin_time')(
                <DatePicker 
                  showTime={true} 
                  placeholder="选择开始时间"
                  format="YYYY-MM-DD HH:mm:ss"
                />
              )
            }
          </FormItem>;
          formItemList.push(begin_time)
          const end_time = <FormItem label="~" colon={false}  key="end_time">
            {
              getFieldDecorator('end_time')(
                <DatePicker showTime={true} 
                  placeholder="选择结束时间"
                  format="YYYY-MM-DD HH:mm:ss" 
                />
              )
            }
          </FormItem>;
          formItemList.push(end_time)
        }else if(item.type === "INPUT"){
          const INPUT = 
            <FormItem label={label} key={field}>
              {
                getFieldDecorator(field,{
                  initialValue: initialValue
                })(
                  <Input type="text" placeholder={placeHolder}/>
                )
              }
            </FormItem>
          formItemList.push(INPUT)
        }else if(item.type === "SELECT"){
          const SELECT = <FormItem label={label} key={field}>
            {
              getFieldDecorator(field, {
                initialValue: initialValue
              })(
                <Select
                  style={{ width: width }}
                  placeholder={placeHolder}
                >
                  {Utils.getOptionList(item.list)}
                </Select>
              )
            }
          </FormItem>;
          formItemList.push(SELECT)
        }else if(item.type === "CHECKBOX"){
          const CHECKBOX = 
            <FormItem label={label} key={field}>
              {
                getFieldDecorator(field,{
                  valuePropName: "checked",
                  initialValue: initialValue
                })(
                  <Checkbox>
                    {label}
                  </Checkbox>
                )
              }
            </FormItem>
          formItemList.push(CHECKBOX)
        }else if(item.type === "DATEPICKER"){
          const DATEPICKER = 
            <FormItem label={label} key={field}>
              {
                getFieldDecorator(field)(
                  <DatePicker placeholder={placeHolder}/>
                )
              }
            </FormItem>
          formItemList.push(DATEPICKER)
        }else if(item.type === "城市"){
          const CITY =
            <FormItem label="城市" key="city_id">
              {
                getFieldDecorator("city_id", {
                  initialValue: "0"
                })(
                  <Select
                    placeholder="全部"
                    style={{width: 100}}
                  >
                    <Option value="0">全部</Option>
                    <Option value="1">北京市</Option>
                    <Option value="2">上海市</Option>
                    <Option value="3">天津市</Option>
                    <Option value="4">杭州市</Option>
                  </Select>
                )
              }
            </FormItem>
          formItemList.push(CITY)
        }
      })
    }
    return formItemList
  }

  handleSearch = () => {
    let fieldsValue = this.props.form.getFieldsValue()
    this.props.filterSubmit(fieldsValue)
  }

  // 重置
  reset = () => {
    // form 表单的重置方法
    this.props.form.resetFields()
  }
}

export default Form.create({})(FilterForm)