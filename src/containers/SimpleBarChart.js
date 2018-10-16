import React from 'react';
import { Row, Col, Card } from 'antd';
import D3SimpleBarChart from '../components/charts/D3SimpleBarChart';



class SimpleBarChart extends React.Component {
    render() {





        const data1 =  [
          { letter: "1月份", frequency: 137.9 },
          { letter: "2月份", frequency: 271.94 },
          { letter: "3月份", frequency: 1459.36 },
          { letter: "4月份", frequency: 1911.28 },
          { letter: "5月份", frequency: 126.54 },
          { letter: "6月份", frequency: 2639.38 },
          { letter: "7月份", frequency: 2881.14 },
          { letter: "8月份", frequency: 2151.22 },
          { letter: "9月份", frequency: 2431.5 },
          { letter: "10月份", frequency: 1340.4 },
          { letter: "11月份", frequency: 0 },
          { letter: "12月份", frequency: 0 }
        ];     
        const data2 =  [
          { letter: "1月份", frequency: 86.0 },
          { letter: "2月份", frequency: 101.22 },
          { letter: "3月份", frequency: 986.12 },
          { letter: "4月份", frequency: 1899.83 },
          { letter: "5月份", frequency: 126.54 },
          { letter: "6月份", frequency: 2084.68 },
          { letter: "7月份", frequency: 2888.78 },
          { letter: "8月份", frequency: 2100.22 },
          { letter: "9月份", frequency: 2387.4 },
          { letter: "10月份", frequency: 1395.92 },
          { letter: "11月份", frequency: 0 },
          { letter: "12月份", frequency: 0 }
        ];     
        return (
            <div className="gutter-example simple-bar-chart-demo">
                <Row gutter={10}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title='2018年溧阳公司处理量' bordered={true}>
                                <D3SimpleBarChart data={data1}  bartitle="预处理量" />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title='2018年溧阳公司处理量' bordered={true}>
                                <D3SimpleBarChart data={data2}  bartitle="焚烧处置量"/>
                            </Card>
                            
                        </div>
                    </Col>
                </Row>             
            </div>
        )
    }
}

export default SimpleBarChart;