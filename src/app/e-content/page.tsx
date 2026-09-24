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
          <details name="econtent-accordion" style={{ marginBottom: '10px', cursor: 'pointer' }}>
            <summary style={{ outline: 'none' }}>
              <h3 className="e-content-title" style={{ display: 'inline-block', margin: '0 0 10px 0', pointerEvents: 'none' }}>{doc.title}</h3>
            </summary>
            
            <div style={{ paddingLeft: '15px', marginTop: '10px', cursor: 'default' }}>
              {doc.topics && doc.topics.length > 0 && (
                <div className="e-content-topics">
                  {doc.topics.map((topic: any, idx: number) => (
                    <div key={idx} className="e-content-topic-card" style={{ marginBottom: '15px', padding: '10px', border: '1px solid #eaeaea', borderRadius: '5px' }}>
                      <h4 style={{ margin: '0 0 10px 0', color: '#0056b3' }}>{topic.topicName}</h4>
                      {topic.notes && <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#555' }}>{topic.notes}</p>}
                      <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
                        {topic.pdf && (
                          <a href={topic.pdf} download target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#d93025' }}>
                            <span>📄</span> PDF Document (Download)
                          </a>
                        )}
                        {topic.link && (
                          <a href={topic.link} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: '#1a73e8' }}>
                            <span>🔗</span> External Link
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="tina-markdown">
                <TinaMarkdown content={doc.body} />
              </div>
            </div>
          </details>
          
          {index < documents.length - 1 && <hr className="divider" />}
        </div>
      ))}
    </div>
  );
}
