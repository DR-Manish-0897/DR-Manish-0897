import React from 'react';
import client from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default async function EContentPage() {
  let documents = [];
  try {
    const res = await client.queries.econtentConnection();
    documents = res.data.econtentConnection.edges?.map((edge: any) => edge.node) || [];
  } catch (error) {
    console.error("Error fetching e-content:", error);
    return <div>Error loading E-Content. Please ensure TinaCMS is built.</div>;
  }

  return (
    <div>
      <h2 className="page-title">E-Content</h2>
      {documents.map((doc: any, index: number) => (
        <div key={index} className="e-content-subject">
          <h3 className="e-content-title">{doc.title}</h3>
          
          {doc.links && doc.links.length > 0 && (
            <div className="e-content-links">
              {doc.links.map((link: any, idx: number) => (
                <a key={idx} href={link.url} target="_blank" rel="noreferrer">
                  📎 {link.label}
                </a>
              ))}
            </div>
          )}
          
          <div className="tina-markdown">
            <TinaMarkdown content={doc.body} />
          </div>
          
          {index < documents.length - 1 && <hr className="divider" />}
        </div>
      ))}
    </div>
  );
}
