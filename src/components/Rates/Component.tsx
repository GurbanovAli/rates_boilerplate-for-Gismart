import React, {useState, useEffect}from 'react'
import ApexChart, { Props } from 'react-apexcharts'
import { StyledContainer } from './style'

export type TComponentProps = {
    currency: string
}

const Rates: React.FC<TComponentProps> = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

 const loadData = async (currency: string = '292') => {
    const endDate = new Date();
    const startDate = new Date(new Date().setDate(endDate.getDate() - 7));

    const response = await fetch(`https://www.nbrb.by/api/exrates/rates/dynamics/${currency}?startdate=${startDate.toISOString()}&enddate=${endDate.toISOString()}`);
    const result = await response.json();

    const dates = result.map(item => item.Date);
    const series = result.map(item => item.Cur_OfficialRate);
    setCategory(dates);
    setData(series);

    console.log(dates);
    console.log(series);
  }

  useEffect(() => {
    loadData(props.currency);
  }, [props.currency]);

  const chartOptions = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          type: 'datetime',
          categories: category
        }
      }
  const chartSeries = [
        {
          name: "currency",
          data: data
        }
      ]
  const type = 'line'

  return (
    <StyledContainer>
      <ApexChart
        options={chartOptions}
        series={chartSeries}
        type={type}
        width={500}
        height={300}
      />
    </StyledContainer>
  )
}

export default Rates
