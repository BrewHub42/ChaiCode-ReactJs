import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
  defaultPreload: 'Intend'
})

function RouteComponent() {
  return <div>Hello "/about"!</div>
}
