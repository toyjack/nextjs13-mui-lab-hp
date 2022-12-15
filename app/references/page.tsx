import React from 'react'
import getReferenceData from '../../utils/getReferencesData'
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const referenceData = getReferenceData()
const meta = matter(referenceData).data
const content = matter(referenceData).content

function ReferencesPage() {
  return <div>
    <h1>{meta.title}</h1>
    <div>
      <ReactMarkdown>

      {content}
      </ReactMarkdown>
    </div>
  </div>;
}

export default ReferencesPage