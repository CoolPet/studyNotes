import React from "react"

import { Table } from "antd"

export default class ETable extends React.Component{
  render(){
    return(
      <div>
        {this.tableInit()}
      </div>
    )
  }

  tableInit = () => {
    let row_selection = this.props.rowSelection
    let selectedRowKeys = this.props.selectedRowKeys
    const rowSelection = {
      type: "radio",
      selectedRowKeys,
      onChange:this.onSelectChange
    }
    if(row_selection === false || row_selection === null){
      row_selection = false
    }else if(row_selection === "checkbox"){
      rowSelection.type = "checkbox"
    }else{
      rowSelection.type = "radio"
    }
    return (
      <Table
        bordered
        {...this.props}
        rowSelection={row_selection ? rowSelection : null}
        onRow={(record, index) => {
          return {
            onClick: () => {
              if(!row_selection){
                return
              }
              this.onRowClick(record, index)
            }
          }
        }}
      />
    )
  }

  onRowClick = (record, index) => {
    let rowSelection = this.props.rowSelection
    if(rowSelection === "checkbox"){

    }else{
      let selectedRowKeys = [index]
      let selectedItem = [record]
      this.props.updateSelectedItem(selectedRowKeys, selectedItem)
    }
  }
}