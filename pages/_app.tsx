import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return <div> 
    <ul>
      <li>Home</li>
      <li>Resume</li>
    </ul>
    <Component {...pageProps} />
  </div> 
  
}

export default MyApp
