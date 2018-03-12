import 'whatwg-fetch'

/**
 * Using https://rss2json.com API to parse the rss feed to json
 * Sample url GET request: https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss&api_key=cu9juohyy0qdve6w5jxv3ry56gakhlah9c9o7wol&order_dir=desc&count=20
 */

export const getRSSFeed = async (rssUrl = null, count = 20) => {
  if (!rssUrl) {
    return
  }

  const apiUrl = `https://3dqgq8xcuc.execute-api.us-west-2.amazonaws.com/v1/podcastr-api`
  const url = `${apiUrl}?rss_url=${rssUrl}`
  try {
    const result = await fetch(url)
    const resultJSON = await result.json()
    console.log('result: ', resultJSON)
    const parsed = schema(resultJSON.rss)
    console.log('parsed: ', parsed)
    return parsed
  } catch (e) {
    console.error('Error getRSSFeed: ', e)
    return null
  }
}

export const getPodcastListings = () => {
  const params = 'term=podcast&country=mx&entity=podcast&media=podcast&limit=10'
  const itunesApi = `https://itunes.apple.com/search?${params}`

  return fetch(itunesApi).then(response => response.json())
}

function schema(rss = {}) {
  const { channel } = rss
  return {
    feed: {
      title: channel.title,
      description: channel.description,
      copyright: channel.copyright,
      author: channel['itunes:author'],
      logo: channel['itunes:image'][0]['@href'],
      link: channel.link,
      pubDate: channel.pubDate,
      categories: channel['itunes:category'].map(cat => cat['@text']),
    },
    items: channel.item.map(i => ({
      guid: i.guid,
      description: i.description,
      keywords: i['itunes:keywords'],
      pubDate: i.pubDate,
      title: i.title,
      media: {
        url: i.enclosure['@url'],
        type: i.enclosure['@type'],
        length: i.enclosure['@length'],
      },
    })),
  }
}
