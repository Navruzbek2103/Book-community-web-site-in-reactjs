import Header from "./components/Header"
import {Intro} from "./components/Intro"
import Harus from "./components/Harus"


export const App = () =>{
  return (<>
    <Header />
    <main>
      <Intro />
      <Harus />
    </main>
  </>)
}