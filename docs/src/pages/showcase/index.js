import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../index.module.css';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__docusaurus');

export default function Showcase() {
  return (
    <Layout title="Showcase Projects">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="screen-casts-section-title">Showcasing projects using <br /> Eccentric Touch</h1>
          <button className="primary-btn bg-color-white text-color-black">List your projects</button>
        </div>
      </header>
      <div className="container projects-showcase-content-wrapper">
        
      </div>
    </Layout>
  )
}