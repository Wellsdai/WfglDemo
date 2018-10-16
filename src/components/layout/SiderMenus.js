import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const SiderMenus = ({match}) => (
  <div style={{paddingBottom:'120px'}}>
    <Menu theme="dark" defaultSelectedKeys={[match.url]} selectedKeys={[match.url]} defaultOpenKeys={['sub4']} mode="inline">
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" />
          <span>首页</span>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub2"
        title={<span><Icon type="user" /><span>登录中心</span></span>}
      >
        <Menu.Item key="/profile"><Link to="/profile">个人信息</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub1"
        title={<span><Icon type="switcher" /><span>各子公司报表</span></span>}
      >
        <Menu.Item key="/tables"><Link to="/tables">简单表格</Link></Menu.Item>
        <Menu.Item key="/asyc-tables"><Link to="/asyc-tables">简单异步表格</Link></Menu.Item>
      </SubMenu>

      <SubMenu
        key="sub3"
        title={<span><Icon type="dot-chart" /><span>化验室报表</span></span>}
      >
        {/* <Menu.Item key="/simple-math-chart"><Link to="/simple-math-chart">常用函数图像</Link></Menu.Item>
        <Menu.Item key="/archimedean-spiral-line"><Link to="/archimedean-spiral-line">阿基米德螺线</Link></Menu.Item>
        <Menu.Item key="/equiangular-spiral-line"><Link to="/equiangular-spiral-line">等角螺线</Link></Menu.Item>
        <Menu.Item key="/exponential-spiral-line"><Link to="/exponential-spiral-line">指数函数图像-极坐标</Link></Menu.Item>
        <Menu.Item key="/logarithmic-spiral-line"><Link to="/logarithmic-spiral-line">对数函数图像-极坐标</Link></Menu.Item> */}
      </SubMenu>
      <SubMenu
        key="sub4"
        title={<span><Icon type="area-chart" /><span>生产汇总分析</span></span>}
      >
        <Menu.Item key="/simple-bar-chart"><Link to="/simple-bar-chart">危废经营状况柱状图</Link></Menu.Item>
        <Menu.Item key="/simple-area-chart"><Link to="/simple-area-chart">危废经营状况面积图</Link></Menu.Item>
        <Menu.Item key="/simple-pie-chart"><Link to="/simple-pie-chart">危废类别占比饼图</Link></Menu.Item>
        <Menu.Item key="/simple-line-chart"><Link to="/simple-line-chart">危废经营状况线状图</Link></Menu.Item>
        <Menu.Item key="/simple-line-chartii"><Link to="/simple-line-chartii">环保数据线状图</Link></Menu.Item>        
        {/* <Menu.Item key="/simple-points-chart"><Link to="/simple-points-chart">D3 简单散点图</Link></Menu.Item> */}
        <Menu.Item key="/grouped-bar-chart"><Link to="/grouped-bar-chart">各地经营比较柱状图</Link></Menu.Item>
        {/* <Menu.Item key="/stacked-bar-chart"><Link to="/stacked-bar-chart">D3 堆栈柱状图</Link></Menu.Item> */}
        {/* <Menu.Item key="/radial-stacked-bar-chart"><Link to="/radial-stacked-bar-chart">D3 径向堆栈柱状图</Link></Menu.Item>
        <Menu.Item key="/simple-chord-chart"><Link to="/simple-chord-chart">D3 简单弦图</Link></Menu.Item>
        <Menu.Item key="/simple-dendrogram-chart"><Link to="/simple-dendrogram-chart">D3 简单树状图</Link></Menu.Item>
        <Menu.Item key="/simple-pack-chart"><Link to="/simple-pack-chart">D3 简单打包图</Link></Menu.Item>
        <Menu.Item key="/radar-line-chart"><Link to="/radar-line-chart">D3 雷达图</Link></Menu.Item> */}
        <Menu.Item key="/simple-china-map-chart"><Link to="/simple-china-map-chart">全国危废产生分布图</Link></Menu.Item>
        {/* <Menu.Item key="/simple-force-chart"><Link to="/simple-force-chart">D3 简单力导向图</Link></Menu.Item>
        <Menu.Item key="/simple-voronoi-chart"><Badge dot={true}><Link to="/simple-voronoi-chart">D3 泰森多边形</Link></Badge></Menu.Item>
        <Menu.Item key="/simple-tag-cloud-chart"><Link to="/simple-tag-cloud-chart">D3 简单标签云图</Link></Menu.Item>
        <Menu.Item key="/vertical-bp-chart"><Link to="/vertical-bp-chart">D3 竖向业务合作伙伴图</Link></Menu.Item>                     */}
      </SubMenu>

      <SubMenu
        key="sub5"
        title={<span><Icon type="rocket" /><span>关键设备运行状态</span></span>}
      >
      </SubMenu>
      <SubMenu
        key="sub6"
        title={<span><Icon type="star" /><span>安全预警</span></span>}
      >
      </SubMenu>
    </Menu>  
  </div>
)

SiderMenus.propTypes = {
  match: PropTypes.object.isRequired,
}

export default SiderMenus
