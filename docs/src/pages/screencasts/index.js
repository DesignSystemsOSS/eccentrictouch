import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';

// videos content data from JSON as an object
import YouTubeVideosData from './__screencasts-data.json';

export default function Screencasts() {
  const [youtubeVideos] = useState(YouTubeVideosData);
  return (
    <Layout title="Screencasts">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="screen-casts-section-title">Screencasts. Understanding Eccentric Touch</h1>
          <div style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '2em'
          }}>
            <button className="primary-btn bg-color-white text-color-black">Check out on YouTube</button>
            <button className="primary-btn bg-neutral-gray-100 border-color-white text-color-white">Contribute as a video creator 🔥</button>
          </div>
        </div>
      </header>
      <div className="container video-content-wrapper m-top-24 m-bottom-24"
        style={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'space-between',
          gridTemplateColumns: 'auto auto auto',
          rowGap: '2.6em'
        }}
      >
        {youtubeVideos.map((video, index) => (
          <div className="video-card-content-container" key={index}>
            <div className="shadow-hoverable video-wrapper-card"
              style={{
                width: '340px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                borderRadius: '24px',
                overflow: 'hidden'
              }}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title}
                style={{
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <p className="m-top-4 text-align-center font-weight-500">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </Layout>
  )
}