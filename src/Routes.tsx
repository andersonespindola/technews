import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Notice } from './pages/Notice'

/**
 * Enabled routes.
 */
export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Notice />} />
      </Switch>
    </BrowserRouter>
  )
}
