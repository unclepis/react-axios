import React from 'react';

export const MainSection = (props) => {
  if (props.content && props.content.length) {
    return (
      props.content.map((item, index) => {
        return (
          <div key={index} style={{
            border: '1px dashed', width: '33%', marginTop: '2px'
          }}>
            <div style={{ height: '150px', backgroundImage: `url(${item.img})`, backgroundSize: '100% 100%' }}></div>
            <h1>{item.title}</h1>
            <p>price:{item.price}</p>
            <p>time period:{item.time}</p>
            <p>rating:{item.rating}</p>
            <p>discount:{item.discount}</p>
          </div>
        );
      })
    )
  } else {
    return null
  }
}
