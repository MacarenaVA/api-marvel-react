import React from "react"
import styles from "./styles/Card.module.css"

const Card = ({ results }) => {
  let display
  const imgsize = "portrait_uncanny"
  if (results) {
    display = results
      .filter(
        (results) => !results.thumbnail.path.endsWith("image_not_available")
      )
      .map((x) => {
        let { id, thumbnail, title, format, series } = x
        return (
          <div key={id} className={`${styles.card}`}>
            <img
              className={`${styles.img}img-thumbnail`}
              src={`${thumbnail.path}/${imgsize}.${thumbnail.extension}`}
              alt=""
            />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{title}</div>
              <div className="">
                <div className="fs-6 fw-normal test-justify">Formato</div>
                <div className="fs-5 test-justify">{format}</div>
                <div className="fs-6 fw-normal test-justify">Serie</div>
                <div className="fs-5 test-justify">{series.name}</div>
              </div>
            </div>
          </div>
        )
      })
  }
  return <>{display}</>
}

export default Card
