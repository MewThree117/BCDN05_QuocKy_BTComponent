import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
      <div className='py-5'>
          <div class="container px-lg-5">
              <div className='banner p-4 p-lg-5 bg-light text-center'>
                  <div className='m-4 m-lg-5'>
                    <h1 class="display-5 banner__title">A warm welcome!</h1>
                    <p className="banner__content">
                    Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
                    </p>
                    <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
