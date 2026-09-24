import React from 'react';
import client from '../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default async function HomePage() {
  let data;
  try {
    const res = await client.queries.home({ relativePath: 'index.md' });
    data = res.data.home;
  } catch (error) {
    console.error("Error fetching home data from TinaCMS:", error);
    return <div>Error loading content. Please ensure TinaCMS is built.</div>;
  }

  return (
    <div>
      {/* Recent News */}
      {data.recentNews && data.recentNews.length > 0 && (
        <div className="news-box">
          <span style={{ fontSize: '28px' }}>📰</span>
          <ul>
            {data.recentNews.map((news: any, idx: number) => (
              <li key={idx}>{news.item}</li>
            ))}
          </ul>
        </div>
      )}

      <hr />

      {/* Grid Content */}
      <div className="content-grid">
        {/* Left Column */}
        <div className="grid-column">
          {data.specialization && data.specialization.length > 0 && (
            <section>
              <strong className="section-title">Area of Specialization:</strong>
              <ul>
                {data.specialization.map((spec: any, idx: number) => (
                  <li key={idx}>{spec.item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.publications && data.publications.length > 0 && (
            <section>
              <strong className="section-title">Publication Details:</strong>
              <ul>
                {data.publications.map((pub: any, idx: number) => (
                  <li key={idx}>{pub.item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.patents && data.patents.length > 0 && (
            <section>
              <strong className="section-title">Patents:</strong>
              <ul>
                {data.patents.map((pat: any, idx: number) => (
                  <li key={idx}>{pat.item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="grid-column">
          {data.education && data.education.length > 0 && (
            <section>
              <strong className="section-title">Academic Education:</strong>
              <ul>
                {data.education.map((edu: any, idx: number) => (
                  <li key={idx}>{edu.item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.experience && data.experience.length > 0 && (
            <section>
              <strong className="section-title">Experience:</strong>
              <ul>
                {data.experience.map((exp: any, idx: number) => (
                  <li key={idx}>{exp.item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.administrativeExperience && data.administrativeExperience.length > 0 && (
            <section>
              <strong className="section-title">Administrative Experience:</strong>
              <ul>
                {data.administrativeExperience.map((exp: any, idx: number) => (
                  <li key={idx}>{exp.item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.supervision && data.supervision.length > 0 && (
            <section>
              <strong className="section-title">Research Supervision:</strong>
              <ul>
                {data.supervision.map((sup: any, idx: number) => (
                  <li key={idx}>{sup.item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <hr />

      {/* Body Content */}
      <div className="tina-markdown">
        <TinaMarkdown content={data.body} />
      </div>
    </div>
  );
}
