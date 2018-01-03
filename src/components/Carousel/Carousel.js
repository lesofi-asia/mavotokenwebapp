import React,{Component} from 'react';

const carouselContainer = document.querySelector(".carousel-container");

class CarouselLeftArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--left"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-left" />
      </a>
    );
  }
}

class CarouselRightArrow extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel__arrow carousel__arrow--right"
        onClick={this.props.onClick}
      >
        <span className="fa fa-2x fa-angle-right" />
      </a>
    );
  }
}

class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

class CarouselSlide extends Component {
  render() {
    const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '300px'}

    
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <div className='container'>
            <div className='row'>
                {this.props.slide.avatar?(
                    <p className="container" style={style}>
                        <img src={this.props.slide.avatar} />
                    </p>
                ):null}
            </div>
            <div className='row'>
                <p className="carousel-slide__content">{this.props.slide.content}</p>
                <p>
                <strong className="carousel-slide__author">
                    {this.props.slide.author}
                </strong>,
                {" "}
                <small className="carousel-slide__source">
                    {this.props.slide.source}
                </small>
                </p>
            </div>
        </div>
      </li>
    );
  }
}

// Carousel wrapper component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carouselCustom">
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                   <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
                </div>   
                <div className='col-sm-8 carouselCustom'>
                    <ul className="carousel__slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                        key={index}
                        index={index}
                        activeIndex={this.state.activeIndex}
                        slide={slide}
                        />
                    )}
                    </ul>
                </div>    
                <div className='col-sm-2'>
                    <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
                </div>        
            </div>
            <div className='row'>
               <div className='col-sm-12'>
                <ul className="carousel__indicators">
                {this.props.slides.map((slide, index) =>
                    <CarouselIndicator
                    key={index}
                    index={index}
                    activeIndex={this.state.activeIndex}
                    isActive={this.state.activeIndex==index} 
                    onClick={e => this.goToSlide(index)}
                    />
                )}
                </ul>
               </div>     
            </div>            
        </div>
      </div>
    );
  }
}

export default Carousel;