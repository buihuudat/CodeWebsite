import {Route, Routes, Link} from 'react-router-dom'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContentPage from './pages/Content'
function App () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/content">Content</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/news" element={<NewsPage />}/>
        <Route path="/content" element={<ContentPage />}/>
      </Routes>
    </div>
  )
}

export default App;
