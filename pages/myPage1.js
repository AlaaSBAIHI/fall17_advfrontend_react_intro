import Footer from "../components/footer3"
import Head from "next/head"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from "../components/appBar";
import RaisedButtonExampleSimple from "../components/button";




const Page = () => (
  <div>
    <Head>
      <title>My own  page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My own page1!</h1>
    <div>
      This is my own page. about using the material ui.
    </div>
    <MuiThemeProvider>
      <div>
        <AppBarExampleIcon>
        </AppBarExampleIcon>
        <RaisedButtonExampleSimple>
        </RaisedButtonExampleSimple>

      </div>

    </MuiThemeProvider>

    <Footer text="Footer™" year="2017" author="Alaa SBAIHI" />
  </div>
)

export default Page
