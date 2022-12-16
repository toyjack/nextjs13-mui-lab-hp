import Image from 'next/image'
import React from 'react'
import datasetJson from '../../data/datasets.json'

async function DatasetsPage() {

  return (
    <div>
      {datasetJson.map((dataset, index) => (
        <div key={index}>
          <h3>{dataset.name}</h3>
            <Image src={dataset.image_url} alt={dataset.name} height={100} width={100} />
          <p>{dataset.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DatasetsPage