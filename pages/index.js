import React, { useState, useEffect } from 'react';
import Head from 'next/head'


export default function Home() {

  // This gets called on every request - one day I'll learn about it
  async function getServerSideProps() {
    return { props: { "org": "TechPubOps" } }
  }

  function refreshMe() {
    console.log('ADSTATS: Refresh button clicked at ' + Date.now() / 1000);
    window.AdFuel.refresh();
  }

  // Use a hook to initialize Ad Fuel, add Page Level Targeting and queue the registry
  useEffect(() => {

    if (window.AdFuelOptions){
      console.log('ADSTATS: UseEffect: Manually initializing AdFuel at ' + Date.now() / 1000);
      window.AdFuel.init(window.AdFuelOptions)
    }

    console.log('ADSTATS: UseEffect: Adding Page Level Targeting and Queuing the HP Registry at ' + Date.now() / 1000);
    window.AdFuel.addPageLevelTarget('status','nba_endeavor')
    window.AdFuel.queueRegistry("https://i.cdn.turner.com/ads/nba3/nba_homepage.min.js"), {
      //adUnitMap: "NBA/schedule",  //for a future demo of ad unit mapping at future time,
      dispatch: true,
      maintainCorrelator: false,
      sync: false,
      syncSlots: [],
      exclude: [],
      slotMap: {}
    }
  }, [])

  return (
    <div className="container">
      <Head>
        <title>MP and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" async src="addListeners2.js" key="addListeners"></script>
        <script type="text/javascript" async src="userconsentConfig2.js" key="userConsentConfig"></script>
        <script type="text/javascript" async src="user-consent.js" key="userConsent"></script>
        <script type="text/javascript" async src="//i.cdn.turner.com/ads/adfuel/ais/2.0/nba3-ais.min.js" key="ais"></script>
        <script type="text/javascript" async src="//i.cdn.turner.com/ads/adfuel/adfuel-2.1.39.js" key="adFuel"></script>
        {/* <script type="text/javascript" async src="adfuel-2.1.39.js" key="adFuel"></script> */}
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">MP on Next.js 9.4.4</a>
        </h1>
        <h4>NBA Home Page</h4>
        <li>Let's use Next.js HEAD function to load "addListeners2.js" file</li>
        <li>Let's use Next.js HEAD function to load "userconsentConfig.js" file</li>
        <li>Let's use Next.js HEAD function to load "user-consent.js" file</li>
        <li>Let's use Next.js HEAD function to load "nba3-ais.min.js" and "adfuel-2.1.39.js" files</li>
        <li>Finally, add page-level targeting and queue the registry via useEffect hook</li>
        <p>Here is ad_bnr_atf_01</p>
        <div className="slotWrapper">
          <div id="ad_bnr_atf_01"></div>
        </div>
        <p>Here is ad_bnr_atf_02</p>
        <div className="slotWrapper">
          <div id="ad_bnr_atf_02"></div>
        </div>
        <p>Here is ad_bnr_btf_01</p>
        <div className="slotWrapper">
          <div id="ad_bnr_btf_01"></div>
        </div>
        <p>Here is ad_nfs_btf_01</p>
        <div className="slotWrapper">
          <div id="ad_nfs_btf_01"></div>
        </div>
        <p>Here is ad_ns_btf_01</p>
        <div className="slotWrapper">
          <div id="ad_ns_btf_01"></div>
        </div>
        <p>Here is ad_ns_btf_02</p>
        <div className="slotWrapper">
          <div id="ad_ns_btf_02"></div>
        </div>
        <p>Here is ad_ns_btf_03</p>
        <div className="slotWrapper">
          <div id="ad_ns_btf_03"></div>
        </div>

        <div>
          <button className="refreshButton" onClick={refreshMe}>Refresh Ads</button>
        </div>

        <p>This page using PROD Ad Fuel and AIS with HomePage Registry: </p>
        <p><a href="//i.cdn.turner.com/ads/adfuel/adfuel-2.1.39.js" target="_blank">//i.cdn.turner.com/ads/adfuel/adfuel-2.1.39.min.js</a> </p>
        <p><a href="//i.cdn.turner.com/ads/adfuel/ais/2.0/nba3-ais.js" target="_blank">//i.cdn.turner.com/ads/adfuel/ais/2.0/nba3-ais.js</a> </p>
        <p><a href="https://i.cdn.turner.com/ads/nba3/index.txt?cacheBuster=00158e" target="_blank">NBA Registry Index</a> </p>
      </main>

      <footer>
        <p>Michael J. Pierce - Tech Pub Ops - WarnerMedia</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .slotWrapper {
          max-width: 970px;
          max-height: 250px;
          min-width: 88px;
          min-height: 31px;
          border: thin solid red;
          text-align: center;
        }

        .refreshButton {
          margin-top: 20px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
