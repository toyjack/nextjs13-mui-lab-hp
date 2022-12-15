import React from 'react'
import datasetJson from '../../../data/datasets.json'

function DatasetName(props: any) {
  const datasetId = props.params.datasetName;
  return (
    <div>DatasetName
      {datasetId}
    </div>
  )
}
export async function generateStaticParams() {
  return datasetJson.map((dataset: any) => ({
    datasetName: dataset.id,
  }));
}
export default DatasetName