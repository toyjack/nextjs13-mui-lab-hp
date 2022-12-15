import React from 'react'
import getDatasetsData from '../../utils/getDatasetsData';

async function DatasetsPage() {
  const data = await getDatasetsData();

  return (
    <div>
      {data.map((dataset: any) => (
        <div key={dataset.dataset_id}>
          <h3>{dataset.dataset_id}</h3>
          <p>{dataset.dataset_id}</p>
        </div>
      ))}
    </div>
  );
}

export default DatasetsPage