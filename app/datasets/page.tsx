import React from 'react'
import datasetJson from '../../data/datasets.json'

async function DatasetsPage() {

  return (
    <div>
      {datasetJson.map((dataset, index) => (
        <div key={index}>
          <h3>{dataset.id}</h3>
          <p>{dataset.name}</p>
        </div>
      ))}
    </div>
  );
}

export default DatasetsPage