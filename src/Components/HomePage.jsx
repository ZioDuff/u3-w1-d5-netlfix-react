import MyFooter from "./MyFooter"
import MyHero from "./MyHero"
import MyNav from "./MyNav"
// questo è il componente dove andiamo a montare tutti i singoli componenti della nostra pagina e che andremo ad inseirire poi in "App.jsx"
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
