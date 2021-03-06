import React, {Component} from 'react'
import Masonry from 'react-masonry-component'
import Fade from 'react-reveal/Fade';

const masonryOptions = {
    transitionDuration: 300
}

export default class Gallery extends Component {

  render() {
    return(
      <Masonry
        className="cf w-100"
        elementType={'div'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad
      >
        {this.props.images.map(image => {
          return(
            <div className="fl w-50 w-third-m w-25-ns" key={image.id}>
                <a href={image.download} target="_blank">
                  <div className="aspect-ratio aspect-ratio--1x1">
                    <Fade bottom>
                      <img
                        style={{backgroundImage: `url(${image.url})`}}
                        className="db bg-center cover aspect-ratio--object"
                        alt=""
                      />
                    </Fade>
                  </div>
                </a>
            </div>
          )
        })}
      </Masonry>
    )
  }
}
