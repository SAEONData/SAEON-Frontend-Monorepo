import React from 'react'
import { MapConfig } from '../config/mapConfig'
import { vmsBaseURL, mapServerBaseURL, mapServerURL } from '../config/serviceURLs'
import './MapServiceWrapper.css'

// PROPS //
// titleFilter - Title filter fo map (default: "")
// statusFilter - Status filter for map (default: 0)
// typologyFilter - Typology filter for map (default: 0)
// regionFilter - Region filter for map (default: 0)
// sectorFilter - Sector filter for map (default: 0)
// width - Width of component (default: 100%)
// height - Height of component (default: 550px)
// onFeatureClick - Callback function for onMessage>>featureClick event

class MapServiceWrapper extends React.Component {

  constructor(props) {
    super(props);

    this.onMessage = this.onMessage.bind(this)
  }

  componentDidMount() {
    window.addEventListener("message", this.onMessage);
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.onMessage, )
  }

  onMessage(event) {
    let { onFeatureClick } = this.props

    if (event.origin === mapServerBaseURL) {
      try {
        var data = JSON.parse(event.data)
        if (data.cmd == 'featureClick' && onFeatureClick) {
          onFeatureClick(data)          
        }
      }
      catch (ex) {
        console.error(ex)
      }
    }
  }

  buildMapConfig() {

    let { titleFilter, statusFilter, typologyFilter, regionFilter, sectorFilter } = this.props

    //Fix undefined
    titleFilter = titleFilter ? titleFilter : ""
    statusFilter = statusFilter ? statusFilter : 0
    typologyFilter = typologyFilter ? typologyFilter : 0
    regionFilter = regionFilter ? regionFilter : 0
    sectorFilter = sectorFilter ? sectorFilter : 0

    let mapConfig = MapConfig

    //Process filters
    if (parseInt(regionFilter) > 0 || parseInt(statusFilter) > 0 || parseInt(typologyFilter) > 0 ||
      parseInt(sectorFilter) > 0 || titleFilter !== "") {

      let filters = []

      //Add region filter if set
      if (parseInt(regionFilter) > 0) {
        filters.push(
          {
            field: "properties.regions",
            value: parseInt(regionFilter)
          }
        )
      }

      //Add status filter if set
      if (parseInt(statusFilter) > 0) {
        filters.push(
          {
            field: "properties.status",
            value: parseInt(statusFilter)
          }
        )
      }

      //Add typology filter if set
      if (parseInt(typologyFilter) > 0) {
        filters.push(
          {
            field: "properties.typology",
            value: parseInt(typologyFilter)
          }
        )
      }

      //Add sector filter if set
      if (parseInt(sectorFilter) > 0) {
        filters.push(
          {
            field: "properties.sectors",
            value: parseInt(sectorFilter)
          }
        )
      }

      //Add title filter if set
      if (titleFilter !== "") {
        filters.push(
          {
            field: "properties.name",
            value: titleFilter
          }
        )
      }

      mapConfig.filters = filters
    }
    else {
      delete mapConfig.filters
    }

    //Set viewport
    if (parseInt(regionFilter) > 0) {
      mapConfig.viewport = {
        service: {
          url: `${vmsBaseURL}regions/${regionFilter}`,
          field: "wkt",
          display: true
        }
      }
    }
    else {
      delete mapConfig.viewport
    }

    return encodeURIComponent(JSON.stringify(mapConfig))
  }

  render() {

    let { height, width } = this.props
    let mapConfig = this.buildMapConfig()
    let mapSrc = `${mapServerURL}?conf=${mapConfig}`

    //Fix undefined
    height = height ? height : "550px"
    width = width ? width : ""

    //Fix format
    if (typeof height === 'number') {
      height = height + "px"
    }
    if (typeof width === 'number') {
      width = width + "px"
    }

    return (
      <div className="map-container" style={{ height, width }}>
        <iframe className="map-frame"
          src={mapSrc}
        />
      </div>
    )
  }
}

export default MapServiceWrapper