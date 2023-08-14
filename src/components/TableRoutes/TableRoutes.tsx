import React from 'react'
import styles from './TableRoutes.module.scss'
import { useDispatch } from 'react-redux'
import { selectedHandler } from '../../redux/slices/navigatorSlice'
import { Table } from 'antd'

interface ITableRoutesProps {
    tableData: {
        latStart: number,
        lngStart: number,
        latMiddle: number,
        lngMiddle: number,
        latEnd: number,
        lngEnd: number
    }[]       
}

const TableRoutes = ({ tableData }: ITableRoutesProps) => {
    const dispatch = useDispatch()
    const columns = [
        {
            title: 'Route',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'LatStart',
            dataIndex: 'latStart',
            key: 'points[0]',
        },
        {
            title: 'LgnStart',
            dataIndex: 'lngStart',
            key: 'points[1]',
          },
          {
            title: 'LatMiddle',
            dataIndex: 'latMiddle',
            key: 'points[2]',
          },
          {
            title: 'LngMiddle',
            dataIndex: 'lngMiddle',
            key: 'points[2]',
          },
          {
            title: 'LatEnd',
            dataIndex: 'latEnd',
            key: 'points[2]',
          },
          {
            title: 'LngEnd',
            dataIndex: 'lngEnd',
            key: 'points[2]',
          },
      ];

  return (
    <div className={styles.table}>
        <Table 
            dataSource={tableData} 
            columns={columns}
            pagination={false}
            rowSelection={{
                type: 'radio',
                onSelect: record => dispatch(selectedHandler(record)),
                selections: true
            }}
        />
    </div>
  )
}

export default TableRoutes