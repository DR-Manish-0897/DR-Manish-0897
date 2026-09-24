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
    <div style={{ lineHeight: "1.4", color: "#000" }}>
      {/* Recent News */}
      {data.recentNews && data.recentNews.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <ul style={{ listStyleType: "disc", paddingLeft: "40px" }}>
            {data.recentNews.map((news: any, idx: number) => (
              <li key={idx} style={{ marginBottom: "5px", fontWeight: "bold" }}>
                {news.item}
                <sup style={{ color: "red", marginLeft: "5px", fontWeight: "bold", fontSize: "11px", animation: "blink 1s linear infinite" }}>NEW</sup>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Row 1 */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "10px" }}>
        <div style={{ width: "48%" }}>
          {data.specialization && data.specialization.length > 0 && (
            <>
              <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Area of Specialization :</h3>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
                {data.specialization.map((spec: any, idx: number) => (
                  <li key={idx} style={{ marginBottom: "5px", textAlign: "left" }}>{spec.item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div style={{ width: "48%" }}>
          {data.education && data.education.length > 0 && (
            <>
              <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Academic Education :</h3>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
                {data.education.map((edu: any, idx: number) => (
                  <li key={idx} style={{ marginBottom: "5px", textAlign: "left" }}>{edu.item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #e0e0e0", margin: "15px 0" }} />

      {/* Row 2 */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "10px" }}>
        <div style={{ width: "48%" }}>
          <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Experience & Administration :</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
            {data.experience?.map((exp: any, idx: number) => (
              <li key={`exp-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{exp.item}</li>
            ))}
            {data.administrativeExperience?.map((exp: any, idx: number) => (
              <li key={`admin-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{exp.item}</li>
            ))}
          </ul>
        </div>
        <div style={{ width: "48%" }}>
          <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Events & Workshops Organized :</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
            {data.conferenceOrganized?.map((item: any, idx: number) => (
              <li key={`conf-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{item.item}</li>
            ))}
            {data.workshopOrganized?.map((item: any, idx: number) => (
              <li key={`work-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{item.item}</li>
            ))}
            {data.eventOrganized?.map((item: any, idx: number) => (
              <li key={`evt-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{item.item}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #e0e0e0", margin: "15px 0" }} />

      {/* Row 3 - 3 columns */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "10px" }}>
        <div style={{ width: "31%" }}>
          <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Publication & Patents :</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
            {data.publications?.map((pub: any, idx: number) => (
              <li key={`pub-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{pub.item}</li>
            ))}
            {data.patents?.map((pat: any, idx: number) => (
              <li key={`pat-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{pat.item}</li>
            ))}
          </ul>
        </div>
        <div style={{ width: "31%" }}>
          <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Research Supervision :</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
            {data.supervision?.map((sup: any, idx: number) => (
              <li key={`sup-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{sup.item}</li>
            ))}
          </ul>
        </div>
        <div style={{ width: "31%" }}>
          <h3 style={{ color: "#b30000", fontSize: "16px", marginBottom: "10px", marginTop: "0" }}>Labs Established :</h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px", fontSize: "15px", fontWeight: "bold", margin: 0 }}>
            {data.labsEstablished?.map((lab: any, idx: number) => (
              <li key={`lab-${idx}`} style={{ marginBottom: "5px", textAlign: "left" }}>{lab.item}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr style={{ border: "0", borderTop: "1px solid #e0e0e0", margin: "15px 0" }} />

      {/* Body Content */}
      <div className="tina-markdown" style={{ marginTop: "20px" }}>
        <TinaMarkdown content={data.body} />
      </div>
    </div>
  );
}
