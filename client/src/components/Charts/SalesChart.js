import React from "react";
import { Column } from "@ant-design/plots";

const SalesChart = () => {
  const data = [
    {
      type: "January",
      sales: 0,
    },
    {
      type: "February",
      sales: 0,
    },
    {
      type: "March",
      sales: 0,
    },
    {
      type: "April",
      sales: 0,
    },
    {
      type: "May",
      sales: 0,
    },
    {
      type: "June",
      sales: 1200,
    },
    {
      type: "July",
      sales: 0,
    },
    {
      type: "August",
      sales: 0,
    },
    {
      type: "September",
      sales: 0,
    },
    {
      type: "October",
      sales: 0,
    },
    {
      type: "November",
      sales: 200,
    },
    {
      type: "December",
      sales: 800,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: "rgba(3, 211, 181, 0.85)",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#fff",
        opacity: 0.6,
        marginTop: 30,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Sales",
      },
      sales: {
        alias: "Sales",
      },
    },
  };
  return <Column {...config} label="" />;
};

export default SalesChart;
