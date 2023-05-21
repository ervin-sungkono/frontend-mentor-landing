import UserBanner from './components/UserBanner'
import ProjectSection from './components/ProjectSection'

export default async function Home() {
  return (
    <main>
      <UserBanner/>
      <ProjectSection/>
    </main>
  )
}
