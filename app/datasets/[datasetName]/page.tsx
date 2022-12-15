import React from 'react'
import getDatasetsData from '../../../utils/getDatasetsData';

function DatasetName(props: any) {
  const datasetId = props.params.datasetName;
  return (
    <div>DatasetName
      {datasetId}
    </div>
  )
}
export async function generateStaticParams() {
  const datasets = await getDatasetsData();

  return datasets.map((dataset: any) => ({
    datasetName: dataset.dataset_id,
  }));
}
export default DatasetName