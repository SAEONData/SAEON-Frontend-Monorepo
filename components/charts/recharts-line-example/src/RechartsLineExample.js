import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import '../css/RechartsLineExample.css'

// PROPS //


class RechartsLineExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      text: "No data provided"
    }

  }

  componentDidMount() {
    /*
    Here we load some test/example data from a staric file asynchronously with a one second delay.
    This is done to simulate a fetch from an actual online data source.
    Once the data has been "loaded" it's passed to the local state.
    */

    this.setState({ text: "Loading data..." })
    setTimeout(async ()  => {
      //Load data after artificial delay
      let { data } = await import('../config/testData')
      this.setState({ data: this.transformData(data) })
    }, 1000)
  }

  transformData(data){
    /*
    Typically the data you recieve from a data-source will not conform to the required format automatically,
    thus a transform function may be needed before the data is passed on to the chart component.

    For this example we want to show Projects per Year, so we'll have to transform the data.
    */

    let tData = []

    if(data){
      //Sort projects an iterate through the array
      data.sort((a, b) => (a.year > b.year) ? 1 : -1).forEach(p => {

        //Check if the year already exists in the output
        let searchYear = tData.filter(d => d.year === p.year);

        if(searchYear && searchYear.length > 0){
          //Increment count (of existing entry)
          searchYear[0].count += 1
        }
        else{
          //Add new entry
          tData.push({
            year: p.year,
            count: 1
          })
        }
      })
    }

    return tData
  }

  render() {

    let { width, height } = this.props
    let { data } = this.state

    width = width ? width : null
    height = height ? height : 450

    return (
      <div className="chart-container" style={{ width: width, height: height }}>

        {
          !data &&
          <h2><i>{this.state.text}</i></h2>
        }

        {
          data &&
          <ResponsiveContainer width="100%" height="100%" >
            <LineChart
              data={data}
              // margin={{
              //   top: 5, right: 30, left: 20, bottom: 5,
              // }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        }

      </div>
    )
  }
}

export default RechartsLineExample