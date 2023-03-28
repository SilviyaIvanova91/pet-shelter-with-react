import style from "./Catalog.Module.css";
import pic from "../../images/Wishbone-Adopt-homepg-2.jpg";
import { CatalogItem } from "./CatalogItem";
import { PetContext } from "../../context/petContext";
import { useContext } from "react";

export const Catalog = () => {
  const { pets } = useContext(PetContext);
  return (
    <div className="catalog-body">
      <img className="catalog-img" src={pic} alt="AdopedPet" />
      <section id="catalog">
        <div className="pets-catalog">
          {pets.map((x) => (
            <CatalogItem key={x._id} {...x} />
          ))}
          {/*If there is no pets in dashboard*/}

          {pets.length === 0 && (
            <div>
              <p className="no-pets">No pets in dashboard</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

/* <div className="pet-card">
<article>
  <img
    className="pet-image"
    src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"
  />
</article>
<h2>Athena</h2>
<h3>American Curl</h3>
<div className="action">
  <a className="btn" href="#">
    Details
  </a>
</div>
</div>
<div className="pet-card">
<article>
  <img
    className="pet-image"
    src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg"
  />
</article>
<h2>Apollo</h2>
<h3>Pug</h3>
<div className="action">
  <a className="btn" href="#">
    Details
  </a>
</div>
</div>
<div className="pet-card">
<img
  className="pet-image"
  src="https://cdn.pixabay.com/photo/2014/10/01/10/44/animal-468228__340.jpg"
/>
<h2>Chibi</h2>
<h3>Teddy guinea pig</h3>
<div className="action">
  <a className="btn" href="#">
    Details
  </a>
</div>
</div>
<div className="pet-card">
<article>
  <img
    className="pet-image"
    src="https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=1600&h=900"
  />
</article>
<h2>Max</h2>
<h3>Shiba Inu</h3>
<div className="action">
  <a className="btn" href="#">
    Details
  </a>
</div>
</div> */
