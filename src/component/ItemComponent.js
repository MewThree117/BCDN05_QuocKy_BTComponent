import React, { Component } from 'react'

export default class ItemComponent extends Component {
  render() {
    return (
        <section className='pt-4'>
            <div className="container px-lg-5">
                <div className="row item__row">
                    <div className="item__card col-lg-6 col-xl-4 mb-5">
                        <div className="card bg-light">
                            <div className='card__body text-center pr-4 pl-4 pb-4 pt-0 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-0'>
                                <div className="card__icon mb-4 mt-n4">
                                    <i class="bi bi-collection"></i>
                                </div>
                                <h2>Fresh new layout</h2>
                                <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>
                    <div className="item__card col-lg-6 col-xl-4 mb-5">
                        <div className="card bg-light">
                            <div className='card__body text-center pr-4 pl-4 pb-4 pt-0 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-0'>
                                <div className="card__icon mb-4 mt-n4">
                                    <i class="bi bi-cloud-download"></i>
                                </div>
                                <h2>Free to download</h2>
                                <p className='mb-0'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="item__card col-lg-6 col-xl-4 mb-5">
                        <div className="card bg-light">
                            <div className='card__body text-center pr-4 pl-4 pb-4 pt-0 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-0'>
                                <div className="card__icon mb-4 mt-n4">
                                    <i class="bi bi-card-heading"></i>
                                </div>
                                <h2>Jumbotron hero header</h2>
                                <p className='mb-0'>The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>
                    <div className="item__card col-lg-6 col-xl-4 mb-5">
                        <div className="card bg-light">
                            <div className='card__body text-center pr-4 pl-4 pb-4 pt-0 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-0'>
                                <div className="card__icon mb-4 mt-n4">
                                    <i class="bi bi-bootstrap"></i>
                                </div>
                                <h2>Feature boxes</h2>
                                <p className='mb-0'>We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>
                    <div className="item__card col-lg-6 col-xl-4 mb-5">
                        <div className="card bg-light">
                            <div className='card__body text-center pr-4 pl-4 pb-4 pt-0 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-0'>
                                <div className="card__icon mb-4 mt-n4">
                                    <i class="bi bi-code"></i>
                                </div>
                                <h2>Simple clean code</h2>
                                <p className='mb-0'>We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>
                    <div className="item__card col-lg-6 col-xl-4 mb-5">
                        <div className="card bg-light">
                            <div className='card__body text-center pr-4 pl-4 pb-4 pt-0 pr-lg-5 pl-lg-5 pb-lg-5 pt-lg-0'>
                                <div className="card__icon mb-4 mt-n4">
                                    <i class="bi bi-patch-check"></i>
                                </div>
                                <h2>A name you trust</h2>
                                <p className='mb-0'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
