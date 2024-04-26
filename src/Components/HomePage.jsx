import MyFooter from "./MyFooter"
import MyHero from "./MyHero"
import MyNav from "./MyNav"

const HomePage = () => {
  return (
    <>
      <header className="App-header">
        <MyNav />
      </header>
      <MyHero />
      <MyFooter />
    </>
  )
}
export default HomePage
