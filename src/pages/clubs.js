import Layout from "components/Layout";
import Container from "components/Container";
import { clubs } from "constant/data";
import ScrollFade from "components/container/ScrollFade";

const ClubsPage = () => {
  if (!window.location.href.split("#")[1]) {window.scrollTo({top: 0})}
  return (
    <Layout>
      <Container bgColor={'bg-color-maroon'}>
        <ScrollFade>
          <h1 className="font-righteous text-center text-color-gold text-uppercase">Clubs</h1>
        </ScrollFade>
      </Container>
      <Container>
        <ScrollFade>
          <div className="row justify-content-center">
            {clubs.map((club) => {
              return (
                <div key={club.name} id={club.name.replace(" ", "-").toLowerCase()} className="col-12 col-lg-6">
                  <div className="bg-color-maroon card m-2 bg-color-maroon border-0">
                    <div className="card-header">
                      <h5 className="text-color-gold m-0">{club.name}</h5>
                    </div>
                    <img src={club.imgUrl} alt={club.name} className='card-img-top' />
                    <div className="card-body">
                      <p className="card-text m-0 space-around-wrap">{club.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollFade>
      </Container>
    </Layout>
  )
}

export default ClubsPage;