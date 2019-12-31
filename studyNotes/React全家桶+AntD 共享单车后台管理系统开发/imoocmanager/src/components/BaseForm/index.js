import React from "react"
import { 
  Input,
  Form,
  Button,
  Checkbox,
  Radio,
  Select,
  DatePicker
} from "antd"
import Utils from "../../utils/util"

const FormItem = Form.Item

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
        if (item.type == '时间查询'){
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
        }
      })
    }
    return formItemList
  }

  handleSearch = () => {
    console.log(this.props)
    let fieldsValue = this.props.form.getFieldsValue()
    this.props.filterSubmit(fieldsValue)
  }
}

export default Form.create({})(FilterForm)