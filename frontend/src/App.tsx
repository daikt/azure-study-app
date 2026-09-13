import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('loading...')

  useEffect(() => {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

    fetch(`${apiBaseUrl}/health`)
      .then((response) => response.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div>
      <h1>Azure Study App</h1>
      <p>Backend status: {status}</p>
    </div>
  )
}

export default App