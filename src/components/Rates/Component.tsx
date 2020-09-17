import React, {useState, useEffect}from 'react'
import ApexChart, { Props } from 'react-apexcharts'
import { TReduxProps } from './Container'
import { StyledContainer } from './style'

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = () => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

 const loadData = async (currency: string = '145') => {
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

  const chartOptions = {
        chart: {
          id: "basic-bar"
        },
        stroke: {
                curve: 'smooth'
        },
        xaxis: {
          categories: category
        }
      }
  const chartSeries = [
        {
          name: "series-1",
          data: data
        }
      ]
  const type = 'line'

  return (
    <StyledContainer>
      <ApexChart
        options={chartOptions || []}
        series={chartSeries || []}
        type={type}
        width={500}
        height={300}
      />
    </StyledContainer>
  )
}

export default Rates
