import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'


const IndexPage = () => (
  <div>
    <Card 
      src="http://scouras.com/assets/SCAppsLogo-176e7e6a15061f819561df8698074b81.png"
      link="/apps/"
      title="IFP Apps">
      <p>
        Check out our <Link to="/apps/"> IFP Apps</Link>!
      </p>
      <p>If you are a user of Imagine, you can obtain our apps at <a  href="https://marketplace.derivatives.com/collections/vendors?q=Scouras+Consulting">Imagine&#39;s IFP app marketplace </a>.
        </p>
    </Card>

    <Card 
      src="http://scouras.com/assets/SCImagineMobile-7ae9722479ed8493e1ef516945f0448f.png" 
      link="/mobile/" 
      title="Imagine Mobile">
      <p>
        Introducing our new <Link to="/mobile/">Android Mobile</Link> app! Take the power of Imagine with you when you leave the office.
      </p>
    </Card>

  </div>
)

export default IndexPage
