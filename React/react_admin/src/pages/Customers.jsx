import React from "react";
import Table from '../components/table/Table'
import customerList from '../assets/JsonData/customers-list.json'

const customerTableHead = [
  '',
  'name',
  'email',
  'phone',
  'total orders',
  'total spend',
  'location'
]

const renderHead = (item, index) => <th key = {item}>{item}</th>

const renderBody = (item, index) => (
  <tr key={index}>
    <td key={item.id}></td>
    <td key={item.name}></td>
    <td key={item.email}></td>
    <td key={item.phone}></td>
    <td key={item.total_orders}></td>
    <td key={item.total_spend}></td>
    <td key={item.location}></td>
  </tr>
)

const Customers = () => {
  return (
    <div className="">
      <h2 className="page-header">
        customers
      </h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit='10'
                headData={customerTableHead}
                renderHead = {(item, index) => renderHead(item, index)}
                bodyData = {customerList}
                renderBody={(item, index) => renderBody(item, index)}
              ></Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers;