import React, { Component } from 'react'
import { getPodcastListings } from '../requests'

const Podcast = ({ podcast }) => {
  console.log('podcast: ', podcast)
  return (
    <ul>
      <li>artistName: {podcast.artistName}</li>
      <li>
        <img src={podcast.artworkUrl100} alt="Podcast logo" />
      </li>
      <li>collectionId: {podcast.collectionId}</li>
      <li>collectionName: {podcast.collectionName}</li>
      <li>collectionViewUrl: {podcast.collectionViewUrl}</li>
      <li>feedUrl: {podcast.feedUrl}</li>
      <li>genres: {podcast.genres}</li>
      <li>primaryGenreName: {podcast.primaryGenreName}</li>
      <li>releaseDate: {podcast.releaseDate}</li>
      <li>trackCount: {podcast.trackCount}</li>
      <li>trackId: {podcast.trackId}</li>
      <li>trackName: {podcast.trackName}</li>
      <li>trackViewUrl: {podcast.trackViewUrl}</li>
      <li>wrapperType: {podcast.wrapperType}</li>
    </ul>
  )
}

export default class Podcasts extends Component {
  state = {
    podcasts: [],
    isFetching: true
  }

  componentDidMount() {
    getPodcastListings()
      .then(response => {
        const { results: podcasts } = response
        console.log(podcasts)
        this.setState({
          podcasts,
          isFetching: false
        })
      })
      .catch(e => {
        console.error('Error ocurred when fetching podcasts from api', e)
        this.setState({
          isFetching: false
        })
      })
  }

  render() {
    if (this.state.isFetching) {
      return null
    }

    const { podcasts } = this.state
    console.log('render podcasts: ', podcasts)
    return (
      <div>
        {podcasts.map(podcast => {
          return <Podcast key={podcast.collectionId} podcast={podcast} />
        })}
      </div>
    )
  }
}
