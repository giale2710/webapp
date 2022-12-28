import Navbar from './components/Navbar/index.jsx'
import Hero from './components/Hero/index.jsx'
import Card from './components/Card/index.jsx'
import Footer from './components/Footer/index.jsx'
import './App.css';
import dataList from './data'

function App() {

  const cards = dataList.map((item) => {
    return <Card 
              key={item.id}
              {...item}
              // img = {item.coverImg}
              // title = {item.title}
              // rating = {item.stats.rating}
              // reviewCount = {item.stats.reviewCount}
              // price = {item.price}
              // location = {item.location}
              // description = {item.description}
              // openSpots = {item.openSpots}
            />
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}  
      </section> 
      <Footer />
    </div>
  
    )
}

export default App;
