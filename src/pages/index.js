import React from 'react'
import Button from '../components/button'
import Layout from '../components/layout'
import {container, flex, content, textHome, buttonContainer} from '../styles/index.module.css'

const Index = () => (
  <Layout>
    <div className={container}>
      <div className={flex}>
        <div className={content}>
          <div className={textHome}>
            <h1 style={{ display: 'inline-block', fontSize: '1.2rem', lineHeight: '1.5rem', marginBottom: '2rem'}}>
              Scouras Consulting is an Imagine partner building apps for the{' '}
              <a
                href="http://marketplace.derivatives.com/collections/vendors?q=Scouras+Consulting"
                style={{ background: 'none', color: 'rgb(233,233,233)', textDecoration: 'underline' }}
              >
                Imagine Financial Platform (IFP)
              </a>
            </h1>
            <p>
              In addition to outlining the benefits and features of our apps, we
              provide documentation, support, and pricing for all of our IFP
              apps.
            </p>
            <p>
              A new version of ImagineMobile has been released that includes the functionality of{' '}
              <a
                href="https://www2.derivatives.com/users/docs/rest/mr82310.htm"
                style={{ background: 'none', color: 'rgb(233,233,233)', textDecoration: 'underline' }}
              >
                Imagine's REST API changes.
              </a>
            </p>

            <p>
              Please check out our IFP apps and our latest app ImagineMobile -
              our mobile app for Android powered devices.
            </p>
            
          </div>
          <div className={buttonContainer}>
            <Button
              buttonName="IFP Apps"
              buttonColor="rgba(233,233,233,1)"
              buttonFontColor="rgba(0,0,0,0.8)"
              buttonBorder="1px solid rgba(0,0,0.0.8)"
              to="/apps/"
            />
            <Button
              buttonName="ImagineMobile"
              buttonColor="rgba(58,58,58,1)"
              buttonBorder="1px solid rgba(255,255,255, 1)"
              to="/mobile"
            />
          </div>

        </div>
      </div>
    </div>
  </Layout>
)

export default Index;