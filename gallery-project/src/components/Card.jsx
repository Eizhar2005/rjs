import React from 'react'

const Card = (props) => {
  return (
    <div>
                <a href={props.elem.url} target="_blank">
            <div className="h-40 w-50  ">
              <img
                src={props.elem.download_url} //
                alt={props.elem.author}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              />
            </div>
            <h2 className="font-medium text-lg">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card
