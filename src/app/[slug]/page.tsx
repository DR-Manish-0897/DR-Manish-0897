import React from 'react';
import client from '../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let data;
  try {
    const res = await client.queries.pages({ relativePath: `${slug}.md` });
    data = res.data.pages;
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return <div>Page not found or TinaCMS not built.</div>;
  }

  return (
    <div>
      <h2 className="page-title">{data.title}</h2>
      
      {data.pdfFile && (
        <div style={{ marginBottom: '20px' }}>
          <iframe 
            src={data.pdfFile} 
            width="100%" 
            height="800px" 
            style={{ border: 'none', borderRadius: '4px', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}
            title={`${data.title} Document`}
          />
        </div>
      )}

      <div className="tina-markdown">
        <TinaMarkdown content={data.body} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const pages = await client.queries.pagesConnection();
    return pages.data.pagesConnection.edges?.map((edge: any) => ({
      slug: edge.node._sys.filename,
    })) || [];
  } catch {
    return [];
  }
}
