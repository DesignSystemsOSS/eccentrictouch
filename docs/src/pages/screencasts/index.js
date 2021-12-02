import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import ReactModal from 'react-modal';

// videos content data from JSON as an object
import YouTubeVideosData from './__screencasts-data.json';

ReactModal.setAppElement('#__docusaurus');

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
          <YoutubeVideoCard key={index} 
            title={video.title}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </Layout>
  )
}

function YoutubeVideoCard(__YoutubeVideoDetails) {
  const [youtubeVideoModalRef, setYoutubeVideoModal] = useState(false);
  return (
    <div className="video-card-content-container"
      onClick={() => setYoutubeVideoModal(true)}
      key={__YoutubeVideoDetails.index}
    >
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
          src={__YoutubeVideoDetails.thumbnail}
          alt={__YoutubeVideoDetails.title}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>
      <p className="m-top-4 text-align-center font-weight-500">
        {__YoutubeVideoDetails.title}
      </p>
      <ReactModal 
        isOpen={youtubeVideoModalRef} 
        key={__YoutubeVideoDetails.index}
        onRequestClose={() => setYoutubeVideoModal(false)}
        style={{
          overlay: {
            backgroundColor: 'var(--color-purple-700)'
          },
          content: {
            width: '60%',
            height: 'fit-content',
            padding: '1.6em',
            margin: 'auto',
            boxShadow: '0px 6px 20px #00000045'
          }
        }}
      >
        <button className="primary-btn bg-color-red-900"
          onClick={() => setYoutubeVideoModal(false)}>Back
        </button>
      </ReactModal>
    </div>
  )
}